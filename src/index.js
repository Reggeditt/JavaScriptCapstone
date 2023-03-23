import './index.css';

const apiBaseUrl = 'https://api.tvmaze.com';
const involvementAPIBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const searchFormEl = document.getElementById('search-form');
const searchInputEl = document.getElementById('search-input');
const involvementApiID = '71VEvRYFUclLOrVdlfg1';

const updateLikesCounter = async (id) => {
  const getLikes = await fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/likes`);
  const likesData = await getLikes.json();

  const counter = document.getElementById(`${id}-counter`);
  const likesCount = likesData.filter((like) => like.item_id === id);
  counter.textContent = (`${likesCount[0].likes + 1} likes`);
};

const postLike = async (id) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
    }),
  };
  fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/likes`, options);
  updateLikesCounter(id);
};

const searchShows = async (query) => {
  const response = await fetch(`${apiBaseUrl}/search/shows ? q = ${query}`);
  const data = await response.json();
  return data;
};

const postComment = async (itemID, commentData) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(commentData),
  };

  fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/comments/`, options)
    .then((response) => {
      if (response.ok);
      throw new Error('there was a problem');
    });
};

const getAndUpdateComment = async (data) => {
  const popupCommentsEl = document.querySelector('.popup-comments');
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/71VEvRYFUclLOrVdlfg1/comments?item_id=item${data.id}`);
  const commentsData = await response.json();
  const commentTitleEl = document.querySelector('.comments-title');
  commentTitleEl.textContent = `Comments (${commentsData.length})`;
  commentsData.forEach((comment) => {
    const commentEl = document.createElement('p');
    commentEl.classList.add('popup-comment');
    commentEl.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    popupCommentsEl.appendChild(commentEl);
  });

  const commentForm = document.getElementById('popup-comment-form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = commentForm.name.value;
    const comment = commentForm.comment.value;
    const commentData = {
      item_id: `item${data.id}`,
      username: name,
      comment,
    };

    postComment(data.id, commentData);
    commentForm.reset();
    popupCommentsEl.innerHTML = '';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/71VEvRYFUclLOrVdlfg1/comments?item_id=item${data.id}`);
    const commentsData = await response.json();
    const commentTitleEl = document.querySelector('.comments-title');
    commentTitleEl.textContent = `Comments (${commentsData.length})`;
    commentsData.forEach((comment) => {
      const commentEl = document.createElement('p');
      commentEl.classList.add('popup-comment');
      commentEl.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      popupCommentsEl.appendChild(commentEl);
    });
    const commentEl = document.createElement('p');
    commentEl.classList.add('popup-comment');
    commentEl.textContent = `${commentsData[1].creation_date} ${commentData.username}: ${commentData.comment}`;
    popupCommentsEl.appendChild(commentEl);
  });
};

const closePopup = (id) => {
  const closeBtns = document.querySelectorAll('.popup-close-btn');
  const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');
  const commentsPopupEl = document.querySelector(`#popup${id}`);
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      commentsPopupEl.remove();
      commentsPopupWrapperEl.style.display = 'none';
    });
  });
};

const renderCommentsPopup = (data) => {
  const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');
  const commentsPopupEl = document.createElement('div');
  commentsPopupEl.classList.add('comments-popup');
  commentsPopupEl.id = `popup${data.id}`;
  commentsPopupEl.innerHTML = `
    <div class="popup-header">
      <img class='popup-image' src='${data.image.original}'></img>
      <span class='popup-close-btn'>&times;</span>
    </div>
    <div class='popup-content'>
      <h2 class='title'>${data.name}</h2>
      <div class='details'>
        <div class='pop-show-header'>
          <div class='pop-show-genre'>
            <p class='show-genre'>Genres: ${data.genres}</p>
            <p class='show-rating'>Rating: ${data.rating.average}</p>
          </div>
          <div class='pop-runtime-header'>
            <p class='show-runtime'>Runtime: ${data.runtime}mins</p>
            <p class='show-status'>Status: ${data.status}</p>
          </div>
        </div>
        <p class='show-language'>Language: ${data.language}</p>
        <p class='show-synopsis'>${data.summary}</p>
      </div>
    </div>
    <h3 class='comments-title'>Comments (0)</h3>
    <div class='popup-comments'></div>
    <form class='popup-comment-form' id='popup-comment-form'>
      <input type='name' name='name' placeholder='Your name' required>
      <textarea name='comment' placeholder='Your comment' required></textarea>
      <button type='submit'>Submit</button>
    </form>
  `;
  commentsPopupWrapperEl.appendChild(commentsPopupEl);
  closePopup(data.id);
  getAndUpdateComment(data);
};

const renderShow = (data) => {
  const mainContentWrapperEl = document.querySelector('.main-content-wrap');
  const showCardEl = document.createElement('div');
  showCardEl.classList.add('show-card');
  showCardEl.innerHTML = `
    <img class='show-image' src='${data.image.medium || data.image.original}'></img>
    <div class='show-info'>
      <h2 class='title'>${data.name}</h2>
      <div class='likes-info'>
        <div class='like-button' data-id='item${data.id}'></div>
        <small class='likes-counter' id='item${data.id}-counter'>0 likes</small>
      </div>
    </div>
    <p class='comment-button' id='show${data.id}' data-id='${data.id}'>Comment</p>
    <p class='rent-movie-button' data-id='${data.id}'>Rent movie</p>
  `;
  mainContentWrapperEl.appendChild(showCardEl);
  const commentBtn = document.querySelector(`#show${data.id}`);
  commentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCommentsPopup(data);
    const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');
    commentsPopupWrapperEl.style.display = 'flex';
    const commentsPopupEl = document.querySelector(`#popup${data.id}`);
    commentsPopupEl.style.display = 'flex';
  });
  updateLikesCounter(`item${data.id}`);
};

const likeBtnsListenEvents = (likeBtns) => {
  likeBtns = document.querySelectorAll('.like-button');
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', (e) => {
      postLike(e.target.dataset.id);
    });
  });
};

const getShowsData = () => {
  const promises = [];
  for (let showId = 1; showId < 15; showId += 1) {
    promises.push(
      fetch(`${apiBaseUrl}/shows/${showId}`)
        .then((response) => response.json()),
    );
  }

  Promise.all(promises)
    .then((result) => {
      const tvShowsData = result;
      tvShowsData.forEach((tvShow) => {
        renderShow(tvShow);
      });
      likeBtnsListenEvents();
    });
};
getShowsData();
searchFormEl.addEventListener('submit', async (event) => {
  const query = searchInputEl.value;
  event.preventDefault();
  searchShows(query).then((data) => {
    data.forEach((show) => {
      renderShow(show.show);
    });
  });
});
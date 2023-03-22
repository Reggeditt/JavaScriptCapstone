import './index.css';

const apiBaseUrl = 'https://api.tvmaze.com';
const involvementAPIBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const searchFormEl = document.getElementById('search-form');
const searchInputEl = document.getElementById('search-input');
const involvementApiID = window.localStorage.getItem('involvementApiID');

const createInvolvementTrackerApp = () => {
  fetch(`${involvementAPIBaseUrl}apps/`, {
    method: 'POST',
  })
    .then((result) => {
      if (result.ok) {
        return result.text();
      }
      throw new Error('there was a problem');
    })
    .then((data) => {
      window.localStorage.setItem('involvementApiID', data);
    });
};

const updateLikesCounter = async (id) => {
  const getLikes = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementApiID}/likes`);
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
  const response = await fetch(`${apiBaseUrl}/search/shows?q=${query}`);
  const data = await response.json();
  return data;
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
  updateLikesCounter(`item${data.id}`);
};

// const postComment = async () => {
//   const options = {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     body: JSON.stringify({
//       item_id: 'item1',
//       username: 'Jane',
//       comment: 'Hello',
//     }),
//   };

//   fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/comments/`, options)
//     .then((response) => {
//       if (response.ok) console.log(response.status);
//       throw new Error('there was a problem');
//     });
// };
// postComment();

// const updateComments = (data) => {
//   const commentsPopupEl = document.querySelector('.comments-popup');
//   const commentsListEl = document.createElement('ul');
//   commentsListEl.classList.add('comments-list');
//   commentsListEl.innerHTML = `
//     <li class='comment'>
//       <p class='comment-username'>${data.username}</p>
//       <p class='comment-text'>${data.comment}</p>
//     </li>
//     `;
// };

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

if (!window.localStorage.getItem('involvementApiID')) createInvolvementTrackerApp();

// // const renderCommentsPopup = (data) => {
// //   console.log('rendering comments popup...', data);
// //   const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');
// //   // commentsPopupWrapperEl.innerHTML = '';
// //   const commentsPopupEl = document.createElement('div');
// //   commentsPopupEl.classList.add('comments-popup');
// //   commentsPopupEl.innerHTML = `
// //     <img class='popup-image' src='${data.image.original}'></img>
// //     <div class='popup-content'>
// //       <h2 class='title'>${data.name}</h2>
// //       <div class='details'>
// //       <p class='show-genre'>${data.genres}</p>
// //       <p class='show-rating'>${data.rating.average}</p>
// //       <p class='show-runtime'>${data.runtime}</p>
// //       <p class='show-status'>${data.status}</p>
// //       <p class='show-language'>${data.language}</p>
// //       <p class='show-synopsis'>${data.summary}</p>
// //       </div>
// //       <div class='likes-info'>
// //         <div class='like-button'></div>
// //         <small class='likes-counter'>0 likes</small>
// //       </div>
// //     </div>
// //     <h3 class='comments-title'>Comments (0)</h3>
// //     <div class='comments'></div>
// //     <form class='popup-comment-form' id='popup-comment-form'>
// //       <input type='name' name='name' placeholder='Your name' required>
// //       <textarea name='comment' placeholder='Your comment' required></textarea>
// //       <button type='submit'>Submit</button>
// //     </form>
// //   `;
// //   commentsPopupWrapperEl.appendChild(commentsPopupEl);
// // };

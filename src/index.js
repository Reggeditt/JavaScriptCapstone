import './index.css';

const apiBaseUrl = ' https://api.tvmaze.com';
const searchFormEl = document.getElementById('search-form');
const searchInputEl = document.getElementById('search-input');

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
    <img class="show-image" src="${data.image.medium}"></img>
    <div class="show-info">
      <h2 class="title">${data.name}</h2>
      <div class="likes-info">
        <div class="like-button"></div>
        <small class="likes-counter">0 likes</small>
      </div>
    </div>
    <p class="comment-button" id="show${data.id}" data-id="${data.id}">Comment</p>
    <p class="rent-movie-button" data-id="${data.id}>Rent movie</p>
  `;
  mainContentWrapperEl.appendChild(showCardEl);
};

//comment popup
const renderCommentsPopup = (data) => {
  console.log('rendering comments popup...', data);
  const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');
  commentsPopupWrapperEl.innerHTML = '';
  const commentsPopupEl = document.createElement('div');
  commentsPopupEl.classList.add('comments-popup');
  commentsPopupEl.innerHTML = `
    <img class="popup-image" src="${data.image.original}"></img>
    <div class="popup-content">
       <h2 class="title">${data.name}</h2>
      <div class="details">
      <p class="show-genre">${data.genres}</p>
      <p class="show-rating">${data.rating.average}</p>
     <p class="show-runtime">${data.runtime}</p>
      <p class="show-status">${data.status}</p>
       <p class="show-language">${data.language}</p>
      <p class="show-synopsis">${data.summary}</p>
       </div>
       <div class="likes-info">
        <div class="like-button"></div>
       <small class="likes-counter">0 likes</small>
      </div>
     </div>
     <h3 class="comments-title">Comments (0)</h3>
    <div class="comments"></div>
     <form class="popup-comment-form" id="popup-comment-form">
       <input type="name" name="name" placeholder="Your name" required>
      <textarea name="comment" placeholder="Your comment" required></textarea>
       <button type="submit">Submit</button>
     </form>
   `;
  commentsPopupWrapperEl.appendChild(commentsPopupEl);
};

const getShowsData = () => {
  const promises = [];
  for (let showId = 1; showId < 20; showId += 1) {
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
        renderCommentsPopup(tvShow);
      });
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


// comment counters
const commentCounter = async (count) => {
  const comment = document.querySelector('.comments-title');
  comment.innerHTML = `Comments(${count})`;
};

//display comment popup
const commentPopUp = document.querySelector('.comments-popup-wrap');
const popUpClose = document.querySelector('.comments-popup-close-button');
const popUpOpen = document.querySelector('.comment-button');

popUpOpen.addEventListener('click', () => {
  commentPopUp.style.display = 'block';
});

popUpClose.addEventListener('click', () => {
  commentPopUp.style.display = 'none';
});

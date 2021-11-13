import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API';

const fetchData = new API();
const { modalFilmEl } = refs;

let currentFilm;

modalFilmEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal_btn_wotched')) {
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'watched');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE';
    } else {
      buttonWatchedEl.textContent = 'ADD TO WATCHED';
    }
  }
  if(e.target.classList.contains('modal_btn_queue')){
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'queue');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE';
    } else {
      buttonWatchedEl.textContent = 'ADD TO WATCHED';
    }
  }
});

async function getData(id, poster,variable) {
  const getData = await fetchData.getDescriptionMovie(id).then(r => r);
  getData.poster_path = poster;
  if(variable === 'watched'){
    addToWatched(getData);
  }
  if(variable === 'queue'){
    addToQueue(getData);
  }
}


function addToWatched(data) {
  currentFilm = data;
  const currentMovie = localStorage.getItem('watched');
  const NextMovie = JSON.parse(currentMovie);
  NextMovie.push(currentFilm);
  localStorage.setItem('watched', JSON.stringify(NextMovie));
}

function addToQueue(data){
  currentFilm = data;
  const currentMovie = localStorage.getItem('queue');
  const NextMovie = JSON.parse(currentMovie);
  NextMovie.push(currentFilm);
  localStorage.setItem('queue', JSON.stringify(NextMovie));
}

// if (data.id !== 'watched') return;

//     if (!localStorage.getItem('watched' , data.id)) {
// const arrayWatched = [];
//     addToArrayWatchedFirst(data.id, arrayWatched);
//   } else if (JSON.parse(localStorage.getItem('watched', data.id))) {
//     deleteFromArrayWatched(data.id);
//   } else {
//     addToArrayWatched(data.id);
//   }

// function addToArrayWatchedFirst(data, arrayWatched) {
//   arrayWatched.push(data.id);
//   setLocalArrayWatched(arrayWatched);
//   // e.target.textContent = 'REMOVE';
// }

// function addToArrayWatched(data) {
//   const newArrayWatched = JSON.parse(localStorage.getItem('watched'));
//   newArrayWatched.push(data.id);
//   setLocalArrayWatched(newArrayWatched);
//   // e.target.textContent = 'REMOVE';

// }


// function deleteFromArrayWatched(data) {
//   const newArrayWatched = JSON.parse(localStorage.getItem('watched'));
//   newArrayWatched.splice(
//     newArrayWatched.find(data.id),
//     0,
//   );
//   setLocalArrayWatched(newArrayWatched);
//   // e.target.textContent = 'ADD TO WATCHED';
// }

// function setLocalArrayWatched(array) {
//   localStorage.setItem('watched', JSON.stringify(array));
// }


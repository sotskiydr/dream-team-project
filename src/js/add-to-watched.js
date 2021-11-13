import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API';

const fetchData = new API();
const { modalFilmEl } = refs;

let currentFilm;

modalFilmEl.addEventListener('click', (e) => {
  if(!e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')){
    removeToStore('watched')
    e.target.classList.add('modal_btn_wotched')
    return
  }
  if(!e.target.classList.contains('modal_btn_queue') && e.target.classList.contains('queue')){
    removeToStore('queue')
    e.target.classList.add('modal_btn_queue')
    return
  }
  if (e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')) {
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'watched');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE';
    } else {
      buttonWatchedEl.textContent = 'ADD TO WATCHED';
    }
    e.target.classList.remove('modal_btn_wotched')
  }
  if(e.target.classList.contains('modal_btn_queue')){
    e.target.classList.add('modal-btn__queue-remove')
    e.target.classList.remove('modal_btn_queue')
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
  e.target.classList.remove('modal_btn_queue');
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

function removeToStore(storage) {
  const currentMovie = localStorage.getItem(storage);
  const NextMovie = JSON.parse(currentMovie);
  const UpdateMovie = NextMovie.filter(e => e.id !== currentFilm.id);
  localStorage.setItem(storage, JSON.stringify(UpdateMovie));
}
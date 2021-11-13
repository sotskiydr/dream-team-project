import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API';

const fetchData = new API();
const { modalFilmEl } = refs;
let currentFilm;

modalFilmEl.addEventListener('click', (e) => {
  if(!e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')){
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'remove-watched');
    // removeToStore('watched')
    e.target.classList.add('modal_btn_wotched')
    e.target.textContent = 'ADD TO WATCH'
    return
  }
  if(!e.target.classList.contains('modal_btn_queue') && e.target.classList.contains('queue')){
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'remove-queue');
    e.target.classList.add('modal_btn_queue')
    e.target.textContent = 'ADD TO QUEUE'
    return
  }
  if (e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')) {
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'watched');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE FROM WATCHED';
    } else {
      buttonWatchedEl.textContent = 'ADD TO WATCHED';
    }
    e.target.classList.remove('modal_btn_wotched')
  }
  if(e.target.classList.contains('modal_btn_queue')){
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg,'queue');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE FROM QUEUE';
    } else {
      buttonWatchedEl.textContent = 'ADD TO QUEUE';
    }
    e.target.classList.remove('modal_btn_queue');
  }
});

async function getData(id, poster,variable) {
  const getData = await fetchData.getDescriptionMovie(id).then(r => r);
  getData.poster_path = poster;
  console.log(getData)
  if(variable === 'watched'){
    addToWatched(getData);
  }
  if(variable === 'queue'){
    addToQueue(getData);
  }
  if(variable === 'remove-watched'){
    removeToStore(getData,'watched')
  }
  if(variable === 'remove-queue'){
    removeToStore(getData,'queue')
  }
}


function addToWatched(data) {
  currentFilm = data;
  console.log(currentFilm)
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

function removeToStore(data,storage) {
  currentFilm = data;
  console.log(currentFilm)
  const currentMovie = localStorage.getItem(storage);
  const NextMovie = JSON.parse(currentMovie);
  const UpdateMovie = NextMovie.filter(e => e.id !== currentFilm.id);
  localStorage.setItem(storage, JSON.stringify(UpdateMovie));
}
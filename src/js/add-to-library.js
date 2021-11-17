import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API';
import { renderGallery } from './render-gallery';

const fetchData = new API();
const { modalFilmEl, galleryList, mainWarning, watchedBtn, queueBtn } = refs;
const { success, error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

let currentFilm;


modalFilmEl.addEventListener('click', (e) => {
  if (!e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')) {
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg, 'remove-watched');
    e.target.classList.add('modal_btn_wotched');
    e.target.textContent = 'ADD TO WATCH';
    return;
  }
  if (!e.target.classList.contains('modal_btn_queue') && e.target.classList.contains('queue')) {
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg, 'remove-queue');
    e.target.classList.add('modal_btn_queue');
    e.target.textContent = 'ADD TO QUEUE';
    return;
  }
  if (e.target.classList.contains('modal_btn_wotched') && e.target.classList.contains('watched')) {
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg, 'watched');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE FROM WATCHED';
    } else {
      buttonWatchedEl.textContent = 'ADD TO WATCHED';
    }
    e.target.classList.remove('modal_btn_wotched');
  }
  if (e.target.classList.contains('modal_btn_queue')) {
    const buttonWatchedEl = e.target;
    const id = e.target.id;
    const posterImg = e.target.getAttribute('data-poster');
    getData(id, posterImg, 'queue');
    if (localStorage.getItem('watched')) {
      buttonWatchedEl.textContent = 'REMOVE FROM QUEUE';
    } else {
      buttonWatchedEl.textContent = 'ADD TO QUEUE';
    }
    e.target.classList.remove('modal_btn_queue');
  }
});

async function getData(id, poster, variable) {
  const getData = await fetchData.getDescriptionMovie(id).then(r => r);
  if (variable === 'watched') {
    addToLibrary(getData);
    success({
      text: 'Movie was added to Watched!',
      delay: 1000,
    });
  }
  if (variable === 'queue') {
    addToQueue(getData);
    success({
      text: 'Movie was added to Queue!',
      delay: 1000,
    });
  }
  if (variable === 'remove-watched') {
    if (JSON.parse(localStorage.getItem('watched'))[1] === undefined) {
      mainWarning.classList.remove('hidden');
    }
    removeToStore(getData, 'watched');
    success({
      text: 'Movie was removed from Watched!',
      delay: 1000,
    });
  }
  if (variable === 'remove-queue') {
    if (JSON.parse(localStorage.getItem('queue'))[1] === undefined) {
      mainWarning.classList.remove('hidden');
    }
    removeToStore(getData, 'queue');
    success({
      text: 'Movie was removed from Queue!',
      delay: 1000,
    });
  }
}


function addToLibrary(data) {
  currentFilm = data;
  currentFilm.newGenres = JSON.stringify(currentFilm.genres);
  const currentMovie = localStorage.getItem('watched');
  const NextMovie = JSON.parse(currentMovie);
  NextMovie.push(currentFilm);
  localStorage.setItem('watched', JSON.stringify(NextMovie));

}

function addToQueue(data) {
  currentFilm = data;
  currentFilm.newGenres = JSON.stringify(currentFilm.genres);
  const currentMovie = localStorage.getItem('queue');
  const NextMovie = JSON.parse(currentMovie);
  NextMovie.push(currentFilm);
  localStorage.setItem('queue', JSON.stringify(NextMovie));

}

function removeToStore(data, storage) {
  currentFilm = data;
  const currentMovie = localStorage.getItem(storage);
  const NextMovie = JSON.parse(currentMovie);
  const UpdateMovie = NextMovie.filter(e => e.id !== currentFilm.id);
  localStorage.setItem(storage, JSON.stringify(UpdateMovie));
  if (localStorage.getItem('page') === 'library') {
    let getItem = '';
    if (watchedBtn.classList.contains('active-btn')) {
      getItem = 'watched';
    }
    if (queueBtn.classList.contains('active-btn')) {
      getItem = 'queue';
    }
    const data = JSON.parse(localStorage.getItem(getItem));
    galleryList.innerHTML = '';
    renderGallery(data, galleryList, 'library');
  }
  if(galleryList.textContent !== ''){
    mainWarning.classList.add('hidden');
  }
}

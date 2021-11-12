import refs from './refs';
import modalMarkup from './modal.js';


// const { modalFilmEl } = refs;
// const arrayQueue = [];


// function addToQueue(evt) {
//   if (evt.target.dataset.value !== 'queue') {
//     arrayQueue.push(modalMarkup);
//     localStorage.setItem('queue', JSON.stringify(arrayQueue))
//   }
// }

// modalFilmEl.addEventListener('click', addToQueue);






// import { dataFilm } from './modal.js';

// const { modalFilmEl } = refs;

// function queue(e) {
//   if (e.target.dataset.value !== 'queue') return;
//   if (!localStorage.getItem('queue')) {
//     const arrayQueue = [];
//     addToArrayQueueFirst(e, arrayQueue);
//   } else if (JSON.parse(localStorage.getItem('queue')).some(el => el.title === dataFilm.title)) {
//     deleteFromArrayQueue(e);
//   } else {
//     addToArrayQueue(e);
//   }
// }

// function addToArrayQueueFirst(e, arrayQueue) {
//   arrayQueue.push(dataFilm);
//   setLocalArrayQueue(arrayQueue);
//   e.target.textContent = 'REMOVE';
// }

// function addToArrayQueue(e) {
//   const newArrayQueue = JSON.parse(localStorage.getItem('queue'));
//   newArrayQueue.push(dataFilm);
//   setLocalArrayQueue(newArrayQueue);
//   e.target.textContent = 'REMOVE';
// }

// function deleteFromArrayQueue(e) {
//   const newArrayQueue = JSON.parse(localStorage.getItem('queue'));
//   newArrayQueue.splice(
//     newArrayQueue.findIndex(el => el.title === dataFilm.title),
//     1,
//   );
//   setLocalArrayQueue(newArrayQueue);
//   e.target.textContent = 'ADD TO QUEuE';
// }

// function setLocalArrayQueue(array) {
//   localStorage.setItem('queue', JSON.stringify(array));
// }

// modalFilmEl.addEventListener('click', queue);
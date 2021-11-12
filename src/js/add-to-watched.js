import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API';

const fetchData = new API();
const { modalFilmEl } = refs;

modalFilmEl.addEventListener('click', (e) => {
  if (!e.target.classList.contains('modal_btn_wotched')) {
    return;
  }
  const id = e.target.id;
  const posterImg = e.target.getAttribute('data-poster');
  getData(id, posterImg);
});

async function getData(id, poster) {
  const getData = await fetchData.getDescriptionMovie(id).then(r => r);
  getData.poster_path = poster;
  watched(getData);
}


function watched(data) {
  //Здесь прилетела дата по нажатию кнопки
  console.log(data);

}

//  if (e.target.dataset.value !== 'watched') return;
//     if (!localStorage.getItem('watched')) {
//     const arrayWatched = [];
//     addToArrayWatchedFirst(e, arrayWatched);
//   } else if (JSON.parse(localStorage.getItem('watched')).some(data.id)) {
//     deleteFromArrayWatched(e);
//   } else {
//     addToArrayWatched(e);
//   }

// function addToArrayWatchedFirst(e, arrayWatched) {
//   arrayWatched.push(getID);
//   setLocalArrayWatched(arrayWatched);
//   e.target.textContent = 'REMOVE';
// }

// function addToArrayWatched(e) {
//   const newArrayWatched = JSON.parse(localStorage.getItem('watched'));
//   newArrayWatched.push(getID);
//   setLocalArrayWatched(newArrayWatched);
//   e.target.textContent = 'REMOVE';
// }

// function deleteFromArrayWatched(e) {
//   const newArrayWatched = JSON.parse(localStorage.getItem('watched'));
//   newArrayWatched.splice(
//     newArrayWatched.findIndex(getID),
//     1,
//   );
//   setLocalArrayWatched(newArrayWatched);
//   e.target.textContent = 'ADD TO WATCHED';
// }

// function setLocalArrayWatched(array) {
//   localStorage.setItem('watched', JSON.stringify(array));
// }


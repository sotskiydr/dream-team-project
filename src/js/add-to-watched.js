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
    if (
    localStorage.getItem('watched') 
  ) {
    buttonWatchedEl.textContent = 'REMOVE';
  } else {
    buttonWatchedEl.textContent = 'ADD TO WATCHED';
  }
  
});

async function getData(id, poster) {
  const getData = await fetchData.getDescriptionMovie(id).then(r => r);
  getData.poster_path = poster;
  watched(getData);
}


function watched(data) {
  //Здесь прилетела дата по нажатию кнопки
  console.log(data.id);
  addToWatched(data)
 
}

function addToWatched(data) {
  const arrayWatched = [];
  arrayWatched.push(data.id);
  localStorage.setItem('watched', JSON.stringify(arrayWatched))
  
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


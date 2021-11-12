import refs from './refs';
import modalMarkup from './modal.js';
import API from './api/API'
const fetchData = new API();

const { buttonModal } = refs;
console.log(buttonModal);
// buttonModal.addEventListener('click', watched)
// const { buttonWatchedEl } = refs;

export default async function getID(data) {
    
  console.log(data);
  const getData = await fetchData.getDescriptionMovie(data).then(r => r)
  console.log(getData);
  watched(getData)
  
  // buttonWatchedEl.addEventListener('click', e => { console.log(e.target)});
}




function watched(data) {
  buttonModal.addEventListener('click', e => {
    localStorage.setItem('tom', 'cat')
    console.log(data);
  })
  
  
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


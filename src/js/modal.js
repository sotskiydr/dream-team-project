import genresData from './data/genresData.json';
const galleryPosterSetModal = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('.modal__button_close');
const modalBackdrop = document.querySelector('.modal_backdrop');
const galleryBox = document.querySelector('.modal-markup');
import { onCutDate, onToggleGenresData ,addModalData } from './components/newData';
import modalMarkup from '../templates/modal.hbs';
import API from '../js/api/API';

const fetchData = new API();

galleryPosterSetModal.addEventListener('click', open);

function open(e) {
  const cardId = e.target.parentNode.id;
  const dataImg = e.target.parentNode.getAttribute('data-img');
  if (!e.target.classList.contains('modal')) {
    return;
  }
  modalBackdrop.classList.remove('is-hidden');
  renderModal(cardId,dataImg);
  
  closeBtn.addEventListener('click', close);
  //refs.modalCloseOverlay.addEventListener('click', modalClose);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close()
    }
  });
  
   
  
  
}
modalBackdrop.addEventListener('click', ()=>{
  //const modalWindow = document.querySelector("modal_window")
  
 
   
 close()
})

function close() {
  modalBackdrop.classList.add('is-hidden');
  galleryBox.innerHTML = '';
}

async function renderModal(cardId,dataImg) {
  try {
    const data = await fetchData.getDescriptionMovie(cardId);
    onCutDate(data);
    addModalData(data, genresData,dataImg);
    data.img = dataImg;
    // console.log(data);
    const markup = modalMarkup(data);
    // console.log(markup);
    galleryBox.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('error');
  }
}
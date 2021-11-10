const refs = {
  'galleryPosterSetModal': document.querySelector('.js-gallery'),
  'closeBtn': document.querySelector('.modal__button_close'),
  'modalBackdrop': document.querySelector('.modal_backdrop'),
  'galleryBox': document.querySelector('.modal-markup')
}

import genresData from './data/genresData.json';
import { onCutDate ,addModalData } from './components/newData';
import modalMarkup from '../templates/modal.hbs';
import API from '../js/api/API';
const fetchData = new API();

refs.galleryPosterSetModal.addEventListener('click', open);

function open(e) {
  const cardId = e.target.parentNode.id;
  const dataImg = e.target.parentNode.getAttribute('data-img');
  if (!e.target.classList.contains('modal')) {
    return;
  }
  refs.modalBackdrop.classList.remove('is-hidden');
  renderModal(cardId,dataImg);
  onCloseModalWindow();
}

function onCloseModalWindow(){
  refs.closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close()
    }
  });
  refs.modalBackdrop.addEventListener('click' , (e) => {
    if(e.target.classList.contains('modal_backdrop')){
      close();
    }
  })
}

function close() {
  refs.modalBackdrop.classList.add('is-hidden');
  refs.galleryBox.innerHTML = '';
}

async function renderModal(cardId,dataImg) {
  try {
    const data = await fetchData.getDescriptionMovie(cardId);
    onCutDate(data);
    addModalData(data, genresData,dataImg);
    data.img = dataImg;
    const markup = modalMarkup(data);
    refs.galleryBox.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('error');
  }
}
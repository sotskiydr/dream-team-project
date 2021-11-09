import genresData from './data/genresData.json';
const galleryPosterSetModal = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('.modal__button_close');
const modalBackdrop = document.querySelector('.modal_backdrop');
const galleryBox = document.querySelector('.modal-markup');
import { onCutDate ,addModalData } from './components/newData';
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
  onCloseModalWindow();
}

function onCloseModalWindow(){
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close()
    }
  });
  modalBackdrop.addEventListener('click' , (e) => {
    if(e.target.classList.contains('modal_backdrop')){
      close();
    }
  })
}

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
    const markup = modalMarkup(data);
    galleryBox.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('error');
  }
}
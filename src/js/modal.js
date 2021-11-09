import genresData from './data/genresData.json';
const galleryPosterSetModal = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('.modal__button_close');
const modalBackdrop = document.querySelector('.modal_backdrop');
const galleryBox = document.querySelector('.modal-markup');
import { onCutDate, onToggleGenresData } from './components/newData';
import modalMarkup from '../templates/modal.hbs';
import API from '../js/api/API';

const fetchData = new API();


galleryPosterSetModal.addEventListener('click', open);
closeBtn.addEventListener('click', close);

//modalBackdrop.addEventListener('click', close);    //не работает на оверфлок закрытие

function open(e) {
  const cardId = e.target.parentNode.id;
  if (!e.target.classList.contains('modal')) {
    return;
  }
  modalBackdrop.classList.remove('is-hidden');
  renderModal(cardId);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalBackdrop.classList.add('is-hidden');
    }
  });
}

function close() {
  document.removeEventListener('keydown');
  modalBackdrop.classList.add('is-hidden');
  galleryBox.innerHTML = '';
}

async function renderModal(cardId) {
  try {
    const data = await fetchData.getDescriptionMovie(cardId);
    onCutDate(data);
    onToggleGenresData(data, genresData);
    // console.log(data);
    const markup = modalMarkup(data);
    // console.log(markup);
    galleryBox.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('error');
  }
}
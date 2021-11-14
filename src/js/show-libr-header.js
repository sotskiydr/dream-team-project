import refs from './refs';
import { renderGallery } from './render-gallery';

const { headerEl, librLink, formEl, librButtonsDiv, mainWarning, galleryList, tuiPag, watchedBtn, queueBtn } = refs;

librLink.addEventListener('click', showLibrHeader);

watchedBtn.addEventListener('click', (e) => {
  myLibraryMarkup('watched');
  queueBtn.disabled = false;
  watchedBtn.disabled = true;
});
queueBtn.addEventListener('click', (e) => {
  myLibraryMarkup('queue');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
});

export function showLibrHeader(e) {
  localStorage.setItem('page', 'library');
  e.preventDefault();
  if (!headerEl.classList.contains('main-header-img')) {
    return;
  }

  headerEl.classList.remove('main-header-img');
  headerEl.classList.add('libr-header-img');
  formEl.style.display = 'none';
  librButtonsDiv.classList.remove('hidden');
  galleryList.innerHTML = '';
  mainWarning.classList.remove('hidden');
  tuiPag.style.display = 'none';
  myLibraryMarkup('watched');
}

function myLibraryMarkup(id) {
  const data = JSON.parse(localStorage.getItem(id));
  galleryList.innerHTML = '';
  renderGallery(data, galleryList, 'library');
  const page = localStorage.getItem('page');
  if (page === 'library' && galleryList.childNodes.length !== 0) {
    mainWarning.classList.add('hidden');
  }
}



import refs from './refs';
import { renderGallery } from './render-gallery';

const { headerEl, librLink, formEl, librButtonsDiv, mainWarning, galleryList, tuiPag } = refs;

librLink.addEventListener('click', showLibrHeader);

export function showLibrHeader(e) {
  localStorage.setItem('page','library')
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
  myLibraryMarkup();
}

function myLibraryMarkup() {
  const data = JSON.parse(localStorage.getItem('watched'));
  renderGallery(data, galleryList, 'library');

}
import refs from './refs';
import { renderGallery } from './render-gallery';

const {
  headerEl,
  homeLink,
  librLink,
  formEl,
  librButtonsDiv,
  mainWarning,
  galleryList,
  tuiPag,
  watchedBtn,
  queueBtn,
  errorMsg,
} = refs;
const page = localStorage.getItem('page');

librLink.addEventListener('click', showLibrHeader);
//on press watched
watchedBtn.addEventListener('click', e => {
  myLibraryMarkup('watched');
  queueBtn.disabled = false;
  watchedBtn.disabled = true;
  removeStyle(queueBtn);
  addStyle(watchedBtn);
  if (galleryList.textContent === '') {
    mainWarning.classList.remove('hidden');
  } else {
    mainWarning.classList.add('hidden');
  }
});
//on press queue
queueBtn.addEventListener('click', e => {
  myLibraryMarkup('queue');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
  addStyle(queueBtn);
  removeStyle(watchedBtn);
  if (galleryList.textContent === '') {
    mainWarning.classList.remove('hidden');
  } else {
    mainWarning.classList.add('hidden');
  }
});

export function showLibrHeader(e) {
  localStorage.setItem('page', 'library');
  e.preventDefault();
  if (!headerEl.classList.contains('main-header-img')) {
    return;
  }
  errorMsg.innerHTML = '';
  homeLink.classList.remove('current');
  librLink.classList.add('current');
  headerEl.classList.remove('main-header-img');
  headerEl.classList.add('libr-header-img');
  formEl.style.display = 'none';
  librButtonsDiv.classList.remove('hidden');
  galleryList.innerHTML = '';
  tuiPag.style.display = 'none';
  // console.log(JSON.parse(localStorage.getItem('watched')).length)

  if (page === 'library' && JSON.parse(localStorage.getItem('watched')).length < 1){
    myLibraryMarkup('queue');
    watchedBtn.disabled = false;
    addStyle(queueBtn);
    queueBtn.disabled = true;
    return;
  }
  myLibraryMarkup('watched');
  addStyle(watchedBtn);
  watchedBtn.disabled = true;
  queueBtn.disabled = false;
  // removeStyle(watchedBtn)
}

function myLibraryMarkup(id) {
  const data = JSON.parse(localStorage.getItem(id));
  galleryList.innerHTML = '';
  renderGallery(data, galleryList, 'library');
  if(galleryList.textContent === ''){
    mainWarning.classList.remove('hidden');
  }
}

function addStyle(elem) {
  elem.style.background = '#ff6b08';
  elem.style.border = '1px solid #ff6b08';
  elem.classList.add('active-btn');
  return false;
}
export function removeStyle(elem) {
  elem.style.background = 'transparent';
  elem.style.border = '1px solid white';
  elem.classList.remove('active-btn');
  return false;
}
import refs from './refs';
import { renderGallery } from './render-gallery';

const { headerEl, librLink, formEl, librButtonsDiv, mainWarning, galleryList, tuiPag, watchedBtn, queueBtn } = refs;
const page = localStorage.getItem('page');


librLink.addEventListener('click', showLibrHeader);
//on press watched
watchedBtn.addEventListener('click', (e) => {
  myLibraryMarkup('watched');
  queueBtn.disabled = false;
  watchedBtn.disabled = true;
  removeStyle(queueBtn)
  addStyle(watchedBtn)
  if (page === 'library' && JSON.parse(localStorage.getItem('watched')).length > 0) {
    console.log('here is work')
    mainWarning.classList.add('hidden');
  }else{
    mainWarning.classList.remove('hidden');
  }
});
//on press queue
queueBtn.addEventListener('click', (e) => {
  myLibraryMarkup('queue');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
  addStyle(queueBtn)
  removeStyle(watchedBtn)
  if (page === 'library' && JSON.parse(localStorage.getItem('queue')).length > 0) {
    mainWarning.classList.add('hidden');
  }else{
    mainWarning.classList.remove('hidden');
  }
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
  tuiPag.style.display = 'none';
  // console.log(JSON.parse(localStorage.getItem('watched')).length)
  if (page === 'library' && JSON.parse(localStorage.getItem('watched')).length < 1) {
    console.log('work1');
    myLibraryMarkup('queue');
    watchedBtn.disabled = false;
    addStyle(queueBtn)
    queueBtn.disabled = true;
    return;
  }
  myLibraryMarkup('watched');
  addStyle(watchedBtn)
}

function myLibraryMarkup(id) {
  const data = JSON.parse(localStorage.getItem(id));
  galleryList.innerHTML = '';
  renderGallery(data, galleryList, 'library');
  if (page === 'library' && galleryList.childNodes.length === 0) {
    mainWarning.classList.remove('hidden');
  }
}

function addStyle (elem){
  elem.style.background = '#ff6b08';
  elem.style.border = '1px solid #ff6b08';
  return false
}
function removeStyle (elem){
  elem.style.background = 'transparent';
  elem.style.border = '1px solid white';
  return false
}


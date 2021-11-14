
import API from '../js/api/API';
const fetchData = new API();
import { renderGallery } from './render-gallery';
import refs from './refs';
import { removeSpinner } from './components/spinner';
const { headerEl, galleryList, logoEl, homeLink, formEl, librButtonsDiv, mainWarning, tuiPag} = refs;
import {getData , options} from './pagination';

export default async function onLoadPopular() {
  try {
    const data = await fetchData.getTrandingMovie();
    // const id = 'popular';
    getData(options, data);
    renderGallery(data, galleryList, 'popular');
  } catch (err) {
  } finally {
    removeSpinner();
  }
}
// подгрузка популярного на главную страницу
onLoadPopular();

// подгрузка популярного при клике на лого и home
logoEl.addEventListener('click', onLoadPopular);
homeLink.addEventListener('click', e => {
  e.preventDefault();
  localStorage.setItem('page','home')
  galleryList.innerHTML = "";
  headerEl.classList.remove('libr-header-img');
  headerEl.classList.add('main-header-img');
  formEl.style.display = "block";
  formEl.reset();
  librButtonsDiv.classList.add('hidden');
  mainWarning.classList.add('hidden');
  onLoadPopular();
  tuiPag.style.display = "block";
});
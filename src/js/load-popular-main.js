import API from '../js/api/API';
const fetchData = new API();
import { renderGallery } from './render-gallery';
import refs from './refs';
import { removeSpinner } from './components/spinner';

import { getData, options } from './pagination';
import {removeStyle} from './show-libr-header'
const {
  headerEl,
  galleryList,
  logoEl,
  homeLink,
  librLink,
  formEl,
  librButtonsDiv,
  mainWarning,
  tuiPag,
  watchedBtn,
  queueBtn
} = refs;
const { success, error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

export default async function onLoadPopular() {
  try {
    console.log('logo pressed')
    homeLink.classList.add('current');
    librLink.classList.remove('current');
    const data = await fetchData.getTrandingMovie();
    getData(options, data);
    renderGallery(data, galleryList, 'popular');
  } catch (err) {
    console.log('error');
    if (data) {
      error({
            text: "CRITICAL ERROR!",
            delay: 1000,
        });
    }
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
  localStorage.setItem('page', 'home');
  galleryList.innerHTML = '';
  headerEl.classList.remove('libr-header-img');
  headerEl.classList.add('main-header-img');
  formEl.style.display = 'block';
  formEl.reset();
  librButtonsDiv.classList.add('hidden');
  mainWarning.classList.add('hidden');
  onLoadPopular();
  tuiPag.style.display = 'block';
  removeStyle(watchedBtn);
  removeStyle(queueBtn);
  mainWarning.classList.add('hidden');
});

import refs from './refs';
import API from '../js/api/API';
const fetchDataByQuery = new API();
import onLoadPopular from './load-popular-main';
import { getData, options } from './pagination';
import { renderGallery } from './render-gallery';
import { removeSpinner } from './components/spinner';
const { galleryList, inputQuery, inputForm, errorMsg, preloader } = refs;

inputForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
  preloader.classList.remove('done');
  galleryList.innerHTML = '';
  errorMsg.innerHTML = '';
  if (inputQuery.value === '') {
    onLoadPopular();
    return;
  }
  try {
    const data = await fetchDataByQuery.getQueryMovie(inputQuery.value);
    const id = 'query';
    fetchDataByQuery.query = inputQuery.value;
    if (typeof data.results === 'undefined' || data.results.length < 1) {
      errorMsg.innerHTML =
        'Search result not successful. Enter the correct movie name and try again';
      onLoadPopular();
      return;
    }
    getData(options, data, id);
    renderGallery(data, galleryList,'popular');
  } catch (err) {
    console.log('fetchDataByQuery error');
  } finally {
    removeSpinner();
  }
}

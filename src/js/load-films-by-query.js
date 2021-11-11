import refs from './refs';
import API from '../js/api/API';
const fetchDataByQuery = new API();
import mainGallery from '../templates/main-gallery.hbs';

import genresData from './data/genresData.json';
import { onCutDate, onToggleGenresData } from './components/newData';
import onLoadPopular from './load-popular-main';
import {getData , options} from './pagination'

const { galleryList, inputQuery, inputForm, errorMsg } = refs;

inputForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
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
    getData(options,data,id);
    onCutDate(data);
    onToggleGenresData(data, genresData);
    const markup = mainGallery(data);
    galleryList.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('fetchDataByQuery error');
  }
}

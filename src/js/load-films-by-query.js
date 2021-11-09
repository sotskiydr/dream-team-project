import refs from './refs';
import API from '../js/api/API';
const fetchDataByQuery = new API();
import mainGallery from '../templates/main-gallery.hbs';
import genresData from './data/genresData.json';
import { onCutDate, onToggleGenresData } from './components/newData';

const { galleryList, inputQuery, inputForm } = refs;

inputForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
  if (inputQuery.value === '') {
    return;
  }
  galleryList.innerHTML = '';
  try {
    const data = await 
    fetchDataByQuery.getQueryMovie(inputQuery.value);
    onCutDate(data);
    onToggleGenresData(data, genresData);
    const markup = mainGallery(data);
    galleryList.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log('fetchDataByQuery error');
  }
}

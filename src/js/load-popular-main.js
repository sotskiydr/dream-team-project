import API from '../js/api/API';
const fetchData = new API();
import { renderGallery } from './render-gallery';
import refs from './refs';
const { galleryList, logoEl, homeLink } = refs;
import {getData , options} from './pagination'

export default async function onLoadPopular() {
  try {
    const data = await fetchData.getTrandingMovie();
    getData(options,data)
    renderGallery(data, galleryList);
  } catch (err) {}
}
// подгрузка популярного на главную страницу
onLoadPopular();

// подгрузка популярного при клике на лого и home
logoEl.addEventListener('click', onLoadPopular);
homeLink.addEventListener('click', onLoadPopular);

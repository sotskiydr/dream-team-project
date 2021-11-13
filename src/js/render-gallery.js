import mainGallery from '../templates/main-gallery.hbs';
import genresData from './data/genresData.json';
import { onCutDate, onToggleGenresData } from './components/newData';

export function renderGallery(data, place) {
  onCutDate(data);
  onToggleGenresData(data, genresData);
  const markup = mainGallery(data);
  place.insertAdjacentHTML('beforeend', markup);

  const imgGallery = place.children;
  const imgArray = [...imgGallery];
  imgArray.forEach(img => {
    img.firstElementChild.addEventListener('load', e => e.target.classList.add('appear'), { once: true });
  });

}

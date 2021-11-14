import mainGallery from '../templates/main-gallery.hbs';
import genresData from './data/genresData.json';
import { onCutDate, onToggleGenresData } from './components/newData';
import libraryMarkup from '../templates/library-markup.hbs'
export function renderGallery(data, place, template) {
  // console.log(data);
  
  onCutDate(data, template);
  onToggleGenresData(data, genresData, template);
  
  let markup = "";
  if (template == 'popular') {
     markup = mainGallery(data);
  }
  if (template == 'library') {
    markup = libraryMarkup(data)
  }
   
  place.insertAdjacentHTML('beforeend', markup);

  const imgGallery = place.children;
  const imgArray = [...imgGallery];
  imgArray.forEach(img => {
    img.firstElementChild.addEventListener('load', e => e.target.classList.add('appear'), { once: true });
  });

}

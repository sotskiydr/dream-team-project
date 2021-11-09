import mainGallery from '../templates/main-gallery.hbs';
import genresData from './data/genresData.json';
import {onCutDate , onToggleGenresData} from './components/newData';

export function renderGallery(data, place) {
    onCutDate(data);
    onToggleGenresData(data, genresData)
    const markup = mainGallery(data);
    place.insertAdjacentHTML('beforeend', markup);
}

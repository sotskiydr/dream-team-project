import API from '../js/api/API'
const fetchData = new API();
import mainGallery from '../templates/main-gallery.hbs';
import refs from './refs';
import genresData from './data/genresData.json';
import {onCutDate , onToggleGenresData} from './components/newData';

const { galleryList } = refs;

export default async function renderGallery() {
    try {
        const data = await fetchData.getTrandingMovie();
        onCutDate(data);
        onToggleGenresData(data, genresData)
        const markup = mainGallery(data);
        galleryList.insertAdjacentHTML('beforeend', markup);
    } catch (err) {
        console.log('error')
    }
}
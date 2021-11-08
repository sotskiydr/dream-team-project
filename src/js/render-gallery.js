import API from '../js/api/API'
const fetchData = new API();
import mainGallery from '../templates/main-galleru.hbs';
import refs from './refs';
const { galleryList } = refs;

export default async function renderGallery() {
    try {
        const data = await fetchData.getTrandingMovie();
        const markup = mainGallery(data);
        galleryList.insertAdjacentHTML('beforeend', markup);
    } catch (err) {
        console.log('error')
    }  
}
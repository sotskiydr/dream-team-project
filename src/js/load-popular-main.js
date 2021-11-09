import API from '../js/api/API'
const fetchData = new API();
import {renderGallery} from "./render-gallery";
import refs from './refs';
const { galleryList, logoEl, homeLink } = refs;

async function onLoadPopular() {
    try {
        const data = await fetchData.getTrandingMovie();
        renderGallery(data, galleryList);
    } catch (err) {
        console.log('error')
    }
}
// подгрузка популярного на главную страницу
onLoadPopular();

// подгрузка популярного при клике на лого и home
logoEl.addEventListener('click', onLoadPopular);
homeLink.addEventListener('click', onLoadPopular);

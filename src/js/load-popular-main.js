import renderGallery from "./render-gallery";
import refs from './refs';
const { logoEl, homeLink } = refs;

// подгрузка популярного на главную страницу
renderGallery();

// подгрузка популярного при клике на лого и home
logoEl.addEventListener('click', renderGallery);
homeLink.addEventListener('click', renderGallery);

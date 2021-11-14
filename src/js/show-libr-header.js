import refs from './refs';
import { renderGallery } from './render-gallery';
const { headerEl, librLink, formEl, librButtonsDiv, mainWarning, galleryList, tuiPag } = refs;
const data = JSON.parse(localStorage.getItem('watched')); // данные из локалстораджа
import libraryMarkup from '../templates/library-markup.hbs'
console.log(data);

librLink.addEventListener('click', showLibrHeader);

export function showLibrHeader(e) {
    e.preventDefault();
    if (!headerEl.classList.contains('main-header-img')) {
        return;   
    }
    
    headerEl.classList.remove('main-header-img');
    headerEl.classList.add('libr-header-img');
    formEl.style.display = "none";
    librButtonsDiv.classList.remove('hidden');
    galleryList.innerHTML = "";
    mainWarning.classList.remove('hidden');
    tuiPag.style.display = "none";
    myLibraryMarkup();
}

function myLibraryMarkup() {
    // const genres = document.querySelector('.gallery__description')
    console.log(data.newGenres);
    renderGallery(data, galleryList, 'library')

    console.log(data);
}


 

// const { galleryList, modalFilmEl, librLink } = refs;


// librLink.addEventListener('click', () => {
    
    
    
// })
 
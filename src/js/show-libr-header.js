import refs from './refs';
const { headerEl, librLink, formEl, librButtonsDiv, galleryList, tuiPag } = refs;

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
    tuiPag.style.display = "none";
}
const galleryPosterSetModal = document.querySelector(".gallery__poster");
const closeBtn = document.querySelector('.modal__button_close')
const modalBackdrop = document.querySelector(".modal_backdrop");


const openDescriptionMovie = addEventListener("click", open);
const closeDescription = addEventListener('click', close);

function open(){
    modalBackdrop.classList.remove('.is-hidden')
}
function close(){
    modalBackdrop.classList.add('.is-hidden')   
}
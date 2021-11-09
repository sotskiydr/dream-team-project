const galleryPosterSetModal = document.querySelector(".js-gallery");
const closeBtn = document.querySelector(".modal__button_close")
const modalBackdrop = document.querySelector(".modal_backdrop");
////////////

galleryPosterSetModal.addEventListener('click', open);
closeBtn.addEventListener('click', close);
//modalBackdrop.addEventListener('click', close);    //не работает на оверфлок закрытие

function open(e){
    if(e.currentTarget.classList !== ('gallery__img')){
    }
    modalBackdrop.classList.remove('is-hidden')
}
function close(){
    modalBackdrop.classList.add('is-hidden')   
}
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        modalBackdrop.classList.add('is-hidden')
    }
})
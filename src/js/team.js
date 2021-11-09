const refs = {
    body: document.querySelector('body'),
    teamSection: document.querySelector('.team__herous'),
    openModalTeam: document.querySelector('.js-footer__open-modal'),
    closeModalTeam: document.querySelector('.js-team__close-modal'),
    backdropTeam: document.querySelector('.js-team__backdrop'),

}

refs.openModalTeam.addEventListener('click', onOpenModal);

function onOpenModal(e) {
    document.body.classList.add('.show-team');
    e.preventDefault();
}
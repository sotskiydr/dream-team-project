import teamList from './heroes';
import heroTempL from '../templates/team.hbs';
import showConfetti from './components/confetti';

const refs = {
  body: document.querySelector('body'),
  teamSection: document.querySelector('.team__heroes'),
  openModalTeam: document.querySelector('.js-footer__open-modal'),
  closeModalTeam: document.querySelector('.js-team__close-modal'),
  backdropTeam: document.querySelector('.js-team__backdrop'),
  canvas: document.getElementById('my-canvas'),
  'buttonUpEl': document.querySelector('[data-button-up]')
};

refs.openModalTeam.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  refs.body.classList.add('show-team');
  e.preventDefault();
  showConfetti();
  renderTeam(teamList);
  window.addEventListener('keydown', onEscPress);
  refs.closeModalTeam.addEventListener('click', onCloseModal);
  refs.backdropTeam.addEventListener('click', onBackdrop);
  refs.canvas.addEventListener('click', onBackdrop);
  refs.buttonUpEl.classList.add('visually-hidden');
}

function renderTeam() {
  const markUp = heroTempL(teamList);
  refs.teamSection.innerHTML = markUp;
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('show-team');
  refs.closeModalTeam.removeEventListener('click', onCloseModal);
  refs.backdropTeam.removeEventListener('click', onBackdrop);
  refs.canvas.removeEventListener('click', onBackdrop);
  refs.teamSection.innerHTML = '';
}

function onBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

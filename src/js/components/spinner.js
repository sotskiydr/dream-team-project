import refs from '../refs';
const { preloader } = refs;

export function removeSpinner() {
  if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
  }
}

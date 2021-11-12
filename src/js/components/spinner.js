import refs from "../refs";
const { preloader } = refs;

export function removeSpinner() {
  setTimeout(function () {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
}

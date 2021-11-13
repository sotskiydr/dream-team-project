import './sass/main.scss';
import './js/example-api';
import './js/load-popular-main';
import './js/pagination';
import './js/modal';
import './js/load-films-by-query';
import './js/theme';
import './js/team';
import './js/add-to-watched';
import './js/add-to-queue';
import './js/components/spinner';
import './js/show-libr-header';


function isGetWatched() {
  if (localStorage.getItem('watched')) return;
  localStorage.setItem('watched', '[]');
}
function isGetQueue() {
  if (localStorage.getItem('queue')) return;
  localStorage.setItem('queue', '[]');

}
isGetQueue();
isGetWatched();
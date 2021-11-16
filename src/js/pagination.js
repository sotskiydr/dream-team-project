import API from '../js/api/API';
const fetchData = new API();
import Pagination from 'tui-pagination';
import { renderGallery }  from './render-gallery';
import refs from './refs'
const { galleryList } = refs;
const { success, error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

async function getData(options,data,id) {
  try {
    // const data = await fetchData.getTrandingMovie();
    options.id = id;
    options.page = data.page;
    options.totalItems = data.total_pages;
    adaptiveMakup(options)
  } catch (err) {
    console.log('error');
  }
  createNewCopy(options)
}

function adaptiveMakup (options){
  const container = document.querySelector('.container');
  const widthContainer = parseInt(getComputedStyle(container).getPropertyValue('width'));
  if(widthContainer === 768){
    options.visiblePages = 7;
  }else if(widthContainer === 320){
    options.visiblePages = 3;
  }
}

const container = document.getElementById('pagination');

const options = {
  totalItems: 1000,
  itemsPerPage: 1,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}" >' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};


function createNewCopy(options){
  const pagination = new Pagination(container, options);
}



container.addEventListener('click' , getNewPage)

function getNewPage(e){
  if(!e.target.classList.contains('tui-page-btn')){
    return

  }
  if(isNaN(Number(e.target.textContent))) {
    return
  }
  fetchData.updatePage(Number(e.target.textContent))
  if(options.id === 'query'){
    onLoadQuery()
  }else{
    onLoadPopular()
  }
  window.scrollTo({ top: 230, behavior: 'smooth' });
}

async function onLoadPopular() {
  try {
    const data = await fetchData.getTrandingMovie();
    galleryList.innerHTML = '';
    renderGallery(data, galleryList,'popular');
  } catch (err) {
    console.log('error');
  }
}

async function onLoadQuery(){
  try {
    const data = await fetchData.getQueryMovie(localStorage.getItem('query'));
    console.log(data)
    galleryList.innerHTML = '';
    renderGallery(data, galleryList,'popular');
  } catch (err) {
    console.log('error');
  }
}

// getDataPopular(options)

export {getData , options}
import API from '../js/api/API';
const fetchData = new API();
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderGallery }  from './render-gallery';
import refs from './refs'
const { galleryList } = refs;
async function getData(options) {
  try {
    const data = await fetchData.getTrandingMovie();
    console.log(data)
    options.page = data.page;
    options.totalItems = data.total_pages;

  } catch (err) {
    console.log('error')
  }
  createNewCopy(options)
}


const container = document.getElementById('pagination');

const options = {
  totalItems: 1000,
  itemsPerPage: 1,
  visiblePages: 5,
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
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
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



container.addEventListener('click' , e => {
  if(!e.target.classList.contains('tui-page-btn')){
    return
  }
  fetchData.updatePage(Number(e.target.textContent))

  console.log(e.target.textContent)
  console.log(fetchData.page)
  onLoadPopular()
})



async function onLoadPopular() {
  try {
    const data = await fetchData.getTrandingMovie();
    console.log(data)
    galleryList.innerHTML = '';
    renderGallery(data, galleryList);
  } catch (err) {}
}
getData(options)
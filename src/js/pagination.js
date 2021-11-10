import API from '../js/api/API';
const fetchData = new API();

fetchData.getTrandingMovie().then(data => console.log(data));
// fetchData.getQueryMovie('batman').then(data => console.log(data));
// fetchData.getDescriptionMovie('321528').then(data => console.log(data));
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const container = document.getElementById('pagination');
// const pagination = new Pagination(container);
const options = {
  totalItems: 100,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 5,
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

const pagination = new Pagination('pagination', options);

/* Это старый код рендеринга кнопок пагинации */
// console.log(API);
// // console.log(FetchData.getTrandingMovie.response);

// fetchData.getDescriptionMovie('321528').then(data => console.log(data));
let refs = {
  buttons: document.getElementById('pagination'),
} 
console.log(refs);
let page = options.template.page;
refs.buttons.addEventListener('click', function () {
  console.log(`нажали на кнопку ${page} пагинации`);
  
});

// );
// console.log(button);
// let notesOnPage = 5;
// for (let item of items) {
   
// button
// };
//         const fetchData = new API(); 
// fetchData.getTrandingMovie().then(data => {
//     console.log(data);
//     const notes = data.slice(0, 6);
//     console.log(notes);
//     let pageNum = +this.innerHTML;
// // //         /* 
// // //         1 - 0 - 5
// // //         2 - 5 - 11
// // //         3 - 11 - 16
// // //         4 - 16 - 21
// // //         */ 
// console.log(pageNum);        
//         // let start = (pageNum - 1) * notesOnPage;
//         // console.log(start);
//         // let end = start + notesOnPage;
//         // console.log(end);
//         // let notes = data.splice(start, end);
//        // console.log(notes);
// }
// // console.log(data)
// );
        
//     });
// }
// let items = document.querySelectorAll('#pagination')
// console.log(items);
// let pages = 20;
// let page = 19;
// document.getElementById('pagination').innerHTML = createPagination(pages, page);

// function createPagination(pages, page) {
//   let str = '<ul class="page-list" >';
//   let active;
//   let pageCutLow = page - 1;
//   let pageCutHigh = page + 1;
//   // Show the Previous button only if you are on a page other than the first
//   if (page > 1) {
//     str += '<li class="page-item previous no"><a onclick="createPagination(pages, '+(page-1)+')">&lsaquo;Prev</a></li>';
//   }
//   // Show all the pagination elements if there are less than 6 pages total
//   if (pages < 6) {
//     for (let p = 1; p <= pages; p++) {
//       active = page == p ? "active" : "no";
//       str += '<li class="'+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
//     }
//   }
//   // Use "..." to collapse pages outside of a certain range
//   else {
//     // Show the very first page followed by a "..." at the beginning of the
//     // pagination section (after the Previous button)
//     if (page > 2) {
//       str += '<li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>';
//       if (page > 3) {
//           str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page-2)+')">...</a></li>';
//       }
//     }
//     // Determine how many pages to show after the current page index
//     if (page === 1) {
//       pageCutHigh += 2;
//     } else if (page === 2) {
//       pageCutHigh += 1;
//     }
//     // Determine how many pages to show before the current page index
//     if (page === pages) {
//       pageCutLow -= 2;
//     } else if (page === pages-1) {
//       pageCutLow -= 1;
//     }
//     // Output the indexes for pages that fall inside the range of pageCutLow
//     // and pageCutHigh
//     for (let p = pageCutLow; p <= pageCutHigh; p++) {
//       if (p === 0) {
//         p += 1;
//       }
//       if (p > pages) {
//         continue
//       }
//       active = page == p ? "active" : "no";
//       str += '<li class="page-item '+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
//     }
//     // Show the very last page preceded by a "..." at the end of the pagination
//     // section (before the Next button)
//     if (page < pages-1) {
//       if (page < pages-2) {
//         str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page+2)+')">...</a></li>';
//       }
//       str += '<li class="page-item no"><a onclick="createPagination(pages, pages)">'+pages+'</a></li>';
//     }
//   }
//   // Show the Next button only if you are on a page other than the last
//   if (page < pages) {
//     str += '<li class="page-item next no"><a onclick="createPagination(pages, '+(page+1)+')">Next&rsaquo;</a></li>';
//   }
//   str += '</ul>';
//   // Return the pagination string to be outputted in the pug templates
//   document.getElementById('pagination').innerHTML = str;
//   return str;
// }
import API from '../js/api/API';
// console.log(API);
// console.log(FetchData.getTrandingMovie.response);

// fetchData.getDescriptionMovie('321528').then(data => console.log(data));
let items = document.querySelectorAll('#js-pagination li');
let notesOnPage = 5;
for (let item of items) {
   
    item.addEventListener('click', function () {
        const fetchData = new API(); 
fetchData.getTrandingMovie().then(data => {
    console.log(data);
    const notes = data.slice(0, 6);
    console.log(notes);
    let pageNum = +this.innerHTML;
// //         /* 
// //         1 - 0 - 5
// //         2 - 5 - 11
// //         3 - 11 - 16
// //         4 - 16 - 21
// //         */ 
console.log(pageNum);        
        // let start = (pageNum - 1) * notesOnPage;
        // console.log(start);
        // let end = start + notesOnPage;
        // console.log(end);
        // let notes = data.splice(start, end);
       // console.log(notes);
}
// console.log(data)
);
        
    });
}
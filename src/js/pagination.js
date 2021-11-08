import API from '../js/api/API';
// console.log(API);
// console.log(FetchData.getTrandingMovie.response);
const fetchData = new API(); 
fetchData.getTrandingMovie().then(data => console.log(data));
// fetchData.getDescriptionMovie('321528').then(data => console.log(data));
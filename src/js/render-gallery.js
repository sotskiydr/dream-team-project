import mainGallery from '../templates/main-galleru.hbs';
import genresData from './data/genresData.json'

export function renderGallery(data, place) {
    onCutDate(data);
    onToggleGenresData(data, genresData)
    const markup = mainGallery(data);
    place.insertAdjacentHTML('beforeend', markup);
    
}

//Обрезаем дату ,чтобы было видно только год.
function onCutDate (object){
  const date = object.results;
  for (const key in date) {
    date[key].release_date = date[key].release_date.slice(0,4);
  }
  return date
}

//Преобразуем жарнры из id в name
function onToggleGenresData (object,genres){
  const data = object.results;
  const genresData = genres.genres;
  for (const key in data) {
    data[key].genre_ids = data[key].genre_ids.map(id => genresData.filter(element => element.id === id))
      .slice(0, 3).flat();
  }
  return data
}
//Обрезаем дату ,чтобы было видно только год.
function onCutDate(object) {
  const date = object.results;
  for (const key in date) {
    if (date[key].hasOwnProperty('release_date')) {
      date[key].release_date = date[key].release_date.slice(0, 4);
    } else {
      date[key].release_date = '';
    }
  }
  return date;
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

export {
  onCutDate,
  onToggleGenresData
}
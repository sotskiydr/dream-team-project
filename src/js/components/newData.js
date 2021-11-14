//Обрезаем дату ,чтобы было видно только год.
function onCutDate(object, template) {
  let date = "";
  if (template == 'popular') {
    date = object.results
  }
  if (template == 'library') {
    date = object
  }
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
function onToggleGenresData(object, genres, template) {
  // console.log(object);
  let data = "";
  if (template == 'popular') {
    data = object.results
    const genresData = genres.genres;
    for (const key in data) {
    data[key].genre_ids = data[key].genre_ids.map(id => genresData.filter(element => element.id === id))
      .slice(0, 3).flat();
  }
  }
  if (template == 'library') {
    
    data = object
   
    const genresData = genres.genres;
    // console.log(data);
    for (const key of data) {
      // console.log(key.genres);
    key.genres = key.genres.map(id => genresData.filter(element => element.id === id))
      .slice(0, 3).flat();
    }
      // console.log(data);
  }

  
  return data
}

function addModalData(object,genres){
  const data = object.results;
  const genresData = genres.genres;
  for (const key in data) {
    data[key].genre_ids = data[key].genre_ids.map(id => genresData.filter(element => element.id === id)).flat();
  }
  return data
}

export {
  onCutDate,
  onToggleGenresData,
  addModalData
}
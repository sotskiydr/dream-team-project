const { success, error } = require('@pnotify/core');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const KEY = '9b0c2f9965f33f91e75ff619d689bb58';

export default class FetchData {
  constructor() {
    this.page = 1;
    this.query = '';
  }
  updatePage(newValue){
    this.page = newValue;
  }
  // Получаем популярное
  async getTrandingMovie() {
    const trandingData = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=${this.page}`;
    try {
      const result = await fetch(`${trandingData}`);
      const response = result.json();
      return response;
    } catch (err) {
      console.log('error');
      error({
            text: "CRITICAL SERVER ERROR!",
            delay: 1000,
        });
    }
  };
  // Получаем фильм по значению
  async getQueryMovie (query){
    localStorage.setItem('query' , query)
    const queryValue = `&query=${query}`;
    const queryData = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&include_adult=false`;
    try {
      const result = await fetch(`${queryData}${queryValue}`);
      const response = result.json();
      return response;
    } catch (err) {
      error({
            text: "CRITICAL SERVER ERROR!",
            delay: 1000,
        });
    }
  }
  //получем фильм по id
  async getDescriptionMovie (id){
    const queryData = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
    try {
      const result = await fetch(`${queryData}`);
      const response = result.json();
      return response;
    } catch (err) {
      error({
            text: "CRITICAL SERVER ERROR!",
            delay: 1000,
        });
    }
  }
}
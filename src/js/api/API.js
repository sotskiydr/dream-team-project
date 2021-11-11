const KEY = '9b0c2f9965f33f91e75ff619d689bb58';

export default class FetchData {
  constructor() {
    this.page = 1;
  }
  updatePage(newValue){
    this.page = newValue;
  }
  incrementPage(){
    if(this.page !== 1000) this.page+=1;
  }
  decrementPage(){
    if(this.page !== 1) this.page-=1;
  }
  // Получаем популярное
  async getTrandingMovie() {
    const trandingData = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=${this.page}`;
    try {
      const result = await fetch(`${trandingData}`);
      const response = result.json();
      return response;
    } catch (err) {
      console.log('error')
    }
  };
  // Получаем фильм по значению
  async getQueryMovie (query){
    const queryValue = `&query=${query}`;
    const queryData = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&include_adult=false`;
    try {
      const result = await fetch(`${queryData}${queryValue}`);
      const response = result.json();
      return response;
    } catch (err) {
      console.log('error')
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
      console.log('error')
    }
  }
}
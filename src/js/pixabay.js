import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '27887897-8d6a5cafda5250a66fb1b4860';

  constructor() {
    this.q = null;
    this.page = 1;
  }

  searchImages() {
    return axios.get(`${this.#BASE_URL}`, {
      params: {
        key: this.#API_KEY,
        page: this.page,
        per_page: 40,
        q: this.q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
  }

  addPages() {
    this.page += 1;
  }
}

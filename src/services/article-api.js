import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

/* eslint-disable-next-line */
export const fetchArticles = (title, genre) => axios.get(`${BASE_URL + title}+subject:${genre}&key=AIzaSyD9d2j89zZl7mCsN2AnjfkYS9g28hWRcYE`,);

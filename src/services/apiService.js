import axios from 'axios';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'bc1d8643395b3b7e7b983675d8b7669b';
const UKR_Language = `&language=uk`;

export async function getTrending() {
  const response = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&${UKR_Language}`
  );
  return response.data.results;
}

export async function getDetalis(movieId) {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&${UKR_Language}`
  );
  return response.data;
}
export async function movieCredits(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&${UKR_Language}`
  );
  return response.data;
}
export async function getReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
}

export async function getSearchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return response.data;
}

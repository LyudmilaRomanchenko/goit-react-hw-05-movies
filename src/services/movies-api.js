const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
const BASE_URL = "https://api.themoviedb.org";

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

const urlTrending = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;
const urlMovies = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${}&page=1&include_adult=false`;
const urlMovieDetails = `${BASE_URL}/3/movies/get-movie-details`;
const urlMovieCredits = `${BASE_URL}/3/movies/get-movie-credits`;
const urlMovieReviews = `${BASE_URL}/3/movies/get-movie-reviews`;

// список самых популярных фильмов на сегодня для создания коллекции на главной странице
async function fetchTrending() {
  const response = await fetch(urlTrending);
  //   console.log(response.json());
  return await response.json();
}

// поиск кинофильма по ключевому слову на странице фильмов
async function fetchMovies() {
  const response = await fetch(urlMovies);
  //   console.log(response.json());
  return await response.json();
}

//запрос полной информации о фильме для страницы кинофильма
async function fetchMovieDetails() {
  const response = await fetch(urlMovieDetails);
  //   console.log(response.json());
  return await response.json();
}

//запрос информации о актёрском составе для страницы кинофильма
async function fetchMovieCredits() {
  const response = await fetch(urlMovieCredits);
  //   console.log(response.json());
  return await response.json();
}

// запрос обзоров для страницы кинофильма
async function fetchMovieReviews() {
  const response = await fetch(urlMovieReviews);
  //   console.log(response.json());
  return await response.json();
}

const apiMovies = { fetchTrending, fetchMovies, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews };

export default apiMovies;

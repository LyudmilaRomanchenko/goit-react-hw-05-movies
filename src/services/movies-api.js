const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
const BASE_URL = "https://api.themoviedb.org";

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

// const cat = "cat";
// const movieId = "10588";

const urlTrending = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;
// const urlMovies = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${cat}&page=1&include_adult=false`;
// const urlMovieDetails = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
// const urlMovieCredits = `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
// const urlMovieReviews = `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

// список самых популярных фильмов на сегодня для создания коллекции на главной странице
async function fetchTrending() {
  const response = await fetch(urlTrending);
  if (response.ok) {
    return await response.json();
  }
  return Promise.reject(new Error("No selection of trending films!"));
}

// поиск кинофильма по ключевому слову на странице фильмов
async function fetchMovies(query) {
  const urlMovies = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const response = await fetch(urlMovies);
  if (response.ok) {
    return await response.json();
  }
  return Promise.reject(new Error("No movie with this title found!"));
}

//запрос полной информации о фильме для страницы кинофильма
async function fetchMovieDetails(movieId) {
  const urlMovieDetails = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(urlMovieDetails);
  if (response.ok) {
    return await response.json();
  }
  return Promise.reject(new Error("No movie description."));
}

//запрос информации о актёрском составе для страницы кинофильма
async function fetchMovieCredits(movieId) {
  const urlMovieCredits = `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(urlMovieCredits);
  if (response.ok) {
    return await response.json();
  }
  return Promise.reject(new Error("No cast list."));
}

// запрос обзоров для страницы кинофильма
async function fetchMovieReviews(movieId) {
  const urlMovieReviews = `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(urlMovieReviews);
  if (response.ok) {
    return await response.json();
  }
  return Promise.reject(new Error("We don't have any reviews for this movie."));
}

const apiMovies = {
  fetchTrending,
  fetchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default apiMovies;

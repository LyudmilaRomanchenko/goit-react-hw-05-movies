import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

//cdc3559cea174c9b75b98956c9a389b5

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

const BASE_URL = "https://developers.themoviedb.org";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

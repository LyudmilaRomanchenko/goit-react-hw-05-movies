import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";
// import Cast from "./views/Cast";
// import Reviews from "./views/Reviews";
import API from "./services/movies-api";
import "./App.css";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
//////////////////////////////////
const Cast = lazy(() => import("./views/Cast"));
const Reviews = lazy(() => import("./views/Reviews"));

function App() {
  console.log(
    API.fetchTrending()
      .then((a) => a)
      .then((d) => d)
  );

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
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
          {/* Если добавить Route для компонентов Cast и Reviews в файл App.js,
          компоненты рендерятся соответственно с новой страницы, т.е. работают */}
          {/* <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
          {/* Если введен не коректный маршрут переходи на HomePage */}
          {/* <Route>
            <HomePage />
          </Route> */} 
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

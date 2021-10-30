import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          {/* Если введен не коректный маршрут переходи на HomePage */}
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;

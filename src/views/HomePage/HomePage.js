import { useState, useEffect } from "react";
// import { NavLink, Route, useRouteMatch } from "react-router-dom";
import MoviesList from "../../components/MoviesList";
import API from "../../services/movies-api";
import s from "./HomePage.module.css";
import Spinner from "../../components/Spinner";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  console.log(error.message);

  useEffect(() => {
    setSpinner(true);

    API.fetchTrending()
      .then(({ results }) => setMovies(results))
      .catch((error) => setError(error))
      .finally(() => setSpinner(false));
  }, []);

  console.log(movies);

  return (
    <div>
      {error && error.message}
      {movies && (
        <>
          <h2 className={s.title}>Trending today</h2>
          {spinner && <Spinner />}
          <MoviesList movies={movies} />
        </>
      )}
    </div>
  );
}

export default HomePage;

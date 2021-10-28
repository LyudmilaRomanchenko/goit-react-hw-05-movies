import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import MoviesList from "../../components/MoviesList";
import API from "../../services/movies-api";
import s from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.fetchTrending()
      .then(({ results }) => setMovies(results))
      .catch((error) => setError(error));
  }, []);

  console.log(movies);

  return (
    <div>
      {movies && (
        <>
          <h2 className={s.title}>Trending today</h2>
          <MoviesList movies={movies} />
        </>
      )}

      {/* {error && } */}
    </div>
  );
}

export default HomePage;

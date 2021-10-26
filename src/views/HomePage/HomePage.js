import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import API from "../../services/movies-api";

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
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* {error && } */}
    </div>
  );
}

export default HomePage;

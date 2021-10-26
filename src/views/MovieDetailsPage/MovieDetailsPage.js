import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
// import { NavLink, Route, useRouteMatch } from "react-router-dom";
import API from "../../services/movies-api";
import MovieCard from "../../components/MovieCard";
import Cast from "../../views/Cast";
import Reviews from "../../views/Reviews";

function MovieDetailsPage() {
  const [movie, setMovie] = useState("");
  const [error, setError] = useState("");

  const { movieId } = useParams();
  console.log(movieId);

  const { url, path } = useRouteMatch();
  console.log(url);

  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then((film) => setMovie(film))
      .catch((error) => setError(error));
  }, [movieId]);

  console.log(movie);
  console.log(error);

  return (
    <div>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
        </>
      )}

      <Route path={`${path}/cast`}>{movie && <Cast />}</Route>

      <Route path={`${path}/reviews`}>{movie && <Reviews />}</Route>

      {movie.status_message && movie.status_message}
    </div>
  );
}

export default MovieDetailsPage;

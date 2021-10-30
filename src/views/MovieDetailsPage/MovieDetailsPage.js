import { useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import API from "../../services/movies-api";
import MovieCard from "../../components/MovieCard";
import AdditionalInform from "../../components/AdditionalInform";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [movie, setMovie] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);

  const history = useHistory();
  console.log(history);

  const location = useLocation();
  // console.log(location.state.from);

  const { movieId } = useParams();
  console.log(movieId);

  const { url, path } = useRouteMatch();
  console.log(url);
  console.log(path);
  console.log(useRouteMatch());

  const onGoDack = () => {
    history.push(location?.state?.from ?? "/");
    // history.goBack();
  };

  useEffect(() => {
    setSpinner(true);

    API.fetchMovieDetails(movieId)
      .then((film) => setMovie(film))
      .catch((error) => setError(error))
      .finally(() => setSpinner(false));
  }, [movieId]);

  console.log(movie);
  console.log(error);

  console.log(`/movies/${movieId}/cast` === `${url}/cast`);
  console.log(`${path}/cast`);
  console.log(`${url}/cast`);

  if (movie.success === false) {
    setMovie("");
  }
  return (
    <>
      {error && error.message}
      {spinner && <Spinner />}
      {movie && (
        <div className={s.container}>
          <Button title="Go back" onGoDack={onGoDack} />
          <MovieCard movie={movie} />
          <AdditionalInform path={path} url={url} />
        </div>
      )}
      {/* {!movie && !spinner && "No movie description."} */}
      <hr />
    </>
  );
}

export default MovieDetailsPage;

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
      {spinner && <Spinner />}
      {movie && (
        <div className={s.container}>
          <Button title="Go back" onGoDack={onGoDack} />
          <MovieCard movie={movie} />
          <AdditionalInform path={path} url={url} />
        </div>
      )}
      {!movie && !spinner && "No movie description."}

      {/* {movie.status_message && movie.status_message} */}
      <hr />
    </>
  );
}

export default MovieDetailsPage;

////////////////
// export default function MoviesDetailsPage() {
//   const { movieId } = useParams();
//   const history = useHistory();
//   const { url, path } = useRouteMatch();

//   const [movie, setMovie] = useState(null);
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     async function getDetailsPage() {
//       try {
//         setLoader(true);
//         const movie = await fetchDetails(movieId);
//         setMovie({ ...movie });
//       } catch (error) {
//         toast.error(error.message, { theme: 'colored' });
//       } finally {
//         setLoader(false);
//       }
//     }
//     getDetailsPage();
//   }, [movieId]);

//   return (
//     <>
//       {loader && (
//         <Loader
//           type="ThreeDots"
//           color="#00BFFF"
//           height={80}
//           width={80}
//           timeout={3000}
//           style={{ textAlign: 'center' }}
//         />
//       )}
//       <button></button>
//       {movie && (
//         <MovieInfo
//           title={movie.title}
//           poster={movie.poster_path}
//           overview={movie.overview}
//           releaseDate={movie.release_date || ' '}
//           popularity={movie.popularity}
//           vote={movie.vote_average}
//           genres={movie.genres.map(genre => genre.name).join(', ')}
//         />
//       )}

//       <ul>
//         <li>
//           <Link to={`${url}/cast`}>
//             <h3>Cast</h3>
//           </Link>
//         </li>
//         <li>
//           <Link to={`${url}/reviews`}>
//             <h3>Reviews</h3>
//           </Link>
//         </li>
//       </ul>
//       <Route path={`${path}/cast`}>
//         <Cast />
//       </Route>
//       <Route path={`${path}/reviews`}>
//         <Reviews />
//       </Route>
//     </>
//   );
// }

// import { useParams } from "react-router-dom";
import { Switch, NavLink, Route } from "react-router-dom";
import Cast from "../../views/Cast";
import Reviews from "../../views/Reviews";

function AdditionalInform({ path, url }) {
  console.log(url);
  console.log(path);

  return (
    <div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Route path={`${path}/cast`}>
        <Cast />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>

      {/* <Switch> */}
      {/* <Route path={`${path}/cast`}>
        <Cast />
      </Route>

      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default AdditionalInform;

// ////////////////
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

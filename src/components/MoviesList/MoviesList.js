import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesList.module.css";

function MoviesList({ movies }) {
  console.log(movies);
  const location = useLocation();
  console.log(location);

  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.listItem}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.listItem}
              >
                {movie.title ? movie.title : movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesList;

MoviesList.prototype = {
  movies: PropTypes.array.isRequired,
};

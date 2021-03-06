import PropTypes from "prop-types";
import s from "./MovieCard.module.css";
import defaultImg from "../../image/default_movie_img.jpg";

function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  console.log(`${poster_path}`);

  const imgurl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className={s.container}>
      {poster_path ? (
        <img
          className={s.img}
          src={imgurl}
          alt={title}
          height="400"
          width="300"
        />
      ) : (
        <img
          className={s.img}
          src={defaultImg}
          alt={title}
          height="400"
          width="300"
        />
      )}

      <div className={s.description}>
        <h2>
          {title}({release_date ? release_date.split("-")[0] : ""})
        </h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;

MovieCard.prototype = {
  movies: PropTypes.object.isRequired,
};

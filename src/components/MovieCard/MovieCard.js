import s from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  console.log(movie);

  const imgurl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className={s.container}>
      <img className={s.img} src={imgurl} alt={title} />
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

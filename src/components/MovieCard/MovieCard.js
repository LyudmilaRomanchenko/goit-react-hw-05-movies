function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  console.log(movie);

  const imgurl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <img src={imgurl} alt="title" />
      <h2>
        {title}({release_date})
      </h2>
      <p>User Score: {vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCard;

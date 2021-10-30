import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/movies-api";
import s from "./Cast.module.css";
import Spinner from "../../components/Spinner";

function Cast() {
  const { movieId } = useParams();
  console.log(movieId);

  console.log(movieId);
  const [ackers, setAckers] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  console.log(error);

  useEffect(() => {
    setSpinner(true);

    API.fetchMovieCredits(movieId)
      .then((ackers) => setAckers(ackers))
      .catch((error) => setError(error))
      .finally(() => setSpinner(false));
  }, [movieId]);

  console.log(ackers);

  const { cast } = ackers;
  console.log(cast);

  const imgurl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      {spinner && !spinner && <Spinner />}
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li className={s.item} key={id}>
              <img
                className={s.img}
                src={`${imgurl}${profile_path}`}
                alt={name}
              />
              <p className={s.description}>
                <p>{name}</p>
                <p>Character: {character}</p>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;

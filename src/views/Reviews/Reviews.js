import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/movies-api";
import Spinner from "../../components/Spinner";

function Reviews() {
  const { movieId } = useParams();
  console.log(movieId);

  console.log(movieId);
  const [reviews, setReviews] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  console.log(error);

  useEffect(() => {
    setSpinner(true);

    API.fetchMovieReviews(movieId)
      .then((reviews) => setReviews(reviews))
      .catch((error) => setError(error))
      .finally(() => setSpinner(false));
  }, [movieId]);

  console.log(reviews);

  const { results, total_pages } = reviews;
  console.log(results);
  console.log(total_pages);

  const message = "We don't have any reviews for this movie.";

  return (
    <div>
      {error && error.message}
      {spinner && <Spinner />}
      {results && !spinner && (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {!total_pages && !spinner && message}
    </div>
  );
}

export default Reviews;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/movies-api";

function Reviews() {
  const { movieId } = useParams();
  console.log(movieId);

  console.log(movieId);
  const [reviews, setReviews] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    API.fetchMovieReviews(movieId)
      .then((reviews) => setReviews(reviews))
      .catch((error) => setError(error));
  }, [movieId]);

  console.log(reviews);

  const { results } = reviews;
  console.log(results);

  return (
    <div>
      {reviews && (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {!reviews && <h3>We don't have any reviews for this movie.</h3>}
    </div>
  );
}

export default Reviews;

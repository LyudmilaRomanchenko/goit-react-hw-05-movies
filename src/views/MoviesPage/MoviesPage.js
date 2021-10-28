import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesPage.module.css";
import API from "../../services/movies-api";
import Searchbar from "../../components/Searchbar";
import MoviesList from "../../components/MoviesList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const history = useHistory();
  console.log(history);

  const location = useLocation();
  console.log(location.search);

  const getQuery = new URLSearchParams(location.search).get("query");
  console.log(getQuery);
  // if (getQuery) {
  //   setQuery(getQuery);
  // }

  // Запрос пользователя по поиску
  const handleFormSubmit = (query) => {
    // console.log(query);

    // history.push({ ...location, search: `query=${query}` });
    setQuery(query);
  };

  // Запрос пользователя по поиску
  useEffect(() => {
    // Если пустая строка запрос не делаем
    if (query === "" && !getQuery) {
      console.log("Пустая строка");
      return;
    }
    console.log(query);

    if (getQuery) {
      setQuery(getQuery);
    }

    API.fetchMovies(query)
      .then(({ results }) => setMovies(results))
      .catch((error) => setError(error));

    history.push({ ...location, search: `query=${query}` });
  }, [query, getQuery]);

  console.log(movies);

  return (
    <div className={s.container}>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;

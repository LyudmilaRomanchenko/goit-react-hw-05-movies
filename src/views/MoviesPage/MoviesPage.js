/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesPage.module.css";
import API from "../../services/movies-api";
import Searchbar from "../../components/Searchbar";
import MoviesList from "../../components/MoviesList";
import Spinner from "../../components/Spinner";

import MovieDetailsPage from "../MovieDetailsPage";

function MoviesPage() {
  const location = useLocation();
  console.log(location.search);
  const getQuery = new URLSearchParams(location.search).get("query");
  console.log(getQuery);

  const queryurl = getQuery !== null ? getQuery : "";

  const [query, setQuery] = useState(queryurl);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  console.log(query);

  const history = useHistory();
  console.log(history);

  // Запрос пользователя по поиску
  function handleFormSubmit(query) {
    // console.log(query);
    setQuery(query);
  }

  // Запрос пользователя по поиску
  useEffect(() => {
    // Если пустая строка запрос не делаем
    if (query === "" && !getQuery) {
      console.log("Пустая строка");
      return;
    }
    console.log(query);

    setSpinner(true);

    API.fetchMovies(query)
      .then(({ results }) => setMovies(results))
      .catch((error) => setError(error))
      .finally(() => setSpinner(false));
    history.push({ ...location, search: `query=${query}` });
  }, [getQuery, query]);

  console.log(movies);

  return (
    <div className={s.container}>
      <Searchbar onSubmit={handleFormSubmit} />
      {spinner && <Spinner />}
      {movies && !spinner && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;

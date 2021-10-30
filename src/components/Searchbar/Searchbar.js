import { useState } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  // Контролируем изминения запроса в инпуте и делаем нечуствительным к регистру (приводим к нижнему регистру)
  const handleChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  console.log(query);

  const notify = () =>
    toast("Enter your request!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //   // Сабмит формы (запрос пользователя по поиску)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Если пустая строка запрос не передаем
    if (query.trim() === "") {
      console.log("Пустая строка");
      return notify();
    }

    // Передаем результат запроса
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type="text"
        name="search"
        value={query}
        autoComplete="off"
        // autoFocus
        onChange={handleChange}
      />

      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
}

export default Searchbar;

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

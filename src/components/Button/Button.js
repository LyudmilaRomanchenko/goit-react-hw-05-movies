import PropTypes from "prop-types";
// import s from "./Button.module.css";

export default function Button({ title, onGoDack }) {
  return (
    <button type="button" onClick={onGoDack}>
      {title}
    </button>
  );
}

Button.prototype = {
  title: PropTypes.string.isRequired,
  onGoDack: PropTypes.func.isRequired,
};

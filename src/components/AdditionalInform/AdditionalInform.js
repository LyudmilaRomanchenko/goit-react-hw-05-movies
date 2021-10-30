// import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

// Динамичкский импорт
const Cast = lazy(() => import("../../views/Cast"));
const Reviews = lazy(() => import("../../views/Reviews"));

function AdditionalInform({ path, url }) {
  console.log(url);
  console.log(path);

  return (
    <div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      {/* Если делать вложеный маршрут согласно тз, то Route для компонентов Cast и
      Reviews не срабатывает и по умолчанию перенаправляет на HomePage */}
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default AdditionalInform;

AdditionalInform.prototype = {
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

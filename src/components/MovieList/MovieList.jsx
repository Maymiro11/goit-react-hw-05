import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MoviesList({ moviesArray }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {moviesArray
        .sort((a, b) => b.vote_average - a.vote_average) 
        .map((movie) => {
          return (
            <li key={movie.id} className={css.item}>
              <Link to={`/movies/${movie.id}`} state={location} className={css.link}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.poster} />
                <span className={css.title}>{movie.title}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

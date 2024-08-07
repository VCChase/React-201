import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const detailUrl = `/movies/${movie.id}`;
  const posterPath =
    movie.poster_path === null
      ? "https://i.imgur.com/Xsm7nuB.png"
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterPath} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
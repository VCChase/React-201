import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmIwZTJkMWNhNjgwODI1NmQ4MzM1YzlhZDUzZDRiZCIsIm5iZiI6MTcyMTg4Mjk3Mi43MDgxODYsInN1YiI6IjY1ZGEwNzBhOWQ4OTM5MDE2MmRhYmUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WdSeaK-rNBVbTklvmp4GtYI6mFuBfWpwbp_B4YMdojs'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
        setIsLoading(false);
      })

  }, [id]);
  
  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />
    }
    if (movieDetails) {
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      if (movieDetails.poster_path === null) {
        posterPath = "https://i.imgur.com/Xsm7nuB.png";
      }

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />

          <div className="container my-5">

            <div className="row">
              <div className="col-md-3">
                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
              </div>

              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">
                  {movieDetails.overview}
                </p>
              </div>
            </div>

          </div>
        </>
      )
    }
  }
  
  return (
    <>
      {renderMovieDetails()}
    </>
  );
};

export default MovieView;
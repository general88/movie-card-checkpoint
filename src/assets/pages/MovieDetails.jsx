import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieData } from "../../data";

import MovieTrailer from "./MovieTrailer";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  //   write a function that will return the item frm the array
  const findMovieByID = () => {
    let movie = movieData.find((item) => String(item.id) === movieId);
    setMovie(movie);
    return movie;
  };

  useEffect(() => {
    findMovieByID();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <h1>Getting movie description...</h1>;
  }

  return (
    <div>
      <MovieTrailer movie={movie} />
    </div>
  );
};

export default MovieDetails;

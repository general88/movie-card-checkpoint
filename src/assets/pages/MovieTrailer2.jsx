import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard2 from "../components/MovieCard2";
import { TrailerContext } from "../../App";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const MovieTrailer2 = () => {
  const { trailer, setTrailer } = useContext(TrailerContext);
  const API_URL = "https://api.themoviedb.org/3";
  const fetchmovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: apiKey,
      },
    });
    if (results) {
      setTrailer(results);
    }
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  const renderMovies = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 mt-5">
      {trailer?.map((movie) => (
        <MovieCard2 key={movie.id} {...movie} />
      ))}
    </div>
  );

  return <div>{renderMovies()}</div>;
};

export default MovieTrailer2;

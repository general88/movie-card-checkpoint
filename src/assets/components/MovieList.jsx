import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myMovies.map((movies) => (
          <MovieCard key={movies.id} {...movies} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

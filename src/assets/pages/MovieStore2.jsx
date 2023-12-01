import { useState, useMemo } from "react";
import { movieData } from "../../data";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import CreateNewMovie from "../components/CreateNewMovie";

// import MainLayout from "./assets/layout/MainLayout";

function MovieStore2() {
  const [myMovies, setMyMovies] = useState(movieData);
  const [random, setRandom] = useState(0);

  // Lets us memorise my movieData in a useMemo hook

  const memorizedMovies = useMemo(() => {
    return {
      myMemorizedMovies: myMovies,
    };
  }, [random]);
  // ******************************************************************
  // *********************************************************************

  //

  return (
    <div>
      <div className="flex flex-col sm:flex-col items-center space-y-3 mb-5   md:flex-row max-w-4xl mx-auto justify-between">
        <Filter setMyMovies={setMyMovies} memorizedMovies={memorizedMovies} />
        <CreateNewMovie
          memorizedMovies={memorizedMovies}
          setMyMovies={setMyMovies}
          setRandom={setRandom}
        />
      </div>
      {myMovies.length === 0 ? (
        <div className="text-center py-24 text-3xl">
          Searched movies did not return any result
        </div>
      ) : (
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
}

export default MovieStore2;

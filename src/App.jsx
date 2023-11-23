import { useState, useMemo } from "react";
import CreateNewMovie from "./assets/components/CreateNewMovie";
import Filter from "./assets/components/Filter";
import MovieList from "./assets/components/MovieList";
import Navbar from "./assets/components/Navbar";
import { movieData } from "./data";

function App() {
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
      <Navbar />

      <div className="flex">
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

export default App;

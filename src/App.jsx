import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieStore from "./assets/pages/MovieStore";
import MovieDetails from "./assets/pages/MovieDetails";
import MainLayout from "./assets/layout/MainLayout";
import MovieStoreLayout from "./assets/layout/MovieStoreLayout";
import MovieTrailer2 from "./assets/pages/MovieTrailer2";
import MovieDetails2 from "./assets/pages/MovieDetails2";
import MovieList from "./assets/components/MovieList";
import MovieTrailer from "./assets/pages/MovieTrailer";

export const TrailerContext = createContext();

const App = () => {
  const [trailer, setTrailer] = useState([]);
  return (
    <TrailerContext.Provider value={{ trailer, setTrailer }}>
      <Routes>
        {/* <Route path="/" element={<MovieStore />} />
      <Route path=":movieId" element={<MovieDetails />} /> */}

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MovieStoreLayout />}>
            <Route index element={<MovieTrailer2 />} />
            <Route path=":movieId" element={<MovieDetails2 />} />
            <Route path="/oldversion" element={<MovieDetails />} />
            <Route path="/oldversion/:movieId" element={<MovieTrailer />} />
          </Route>
        </Route>
      </Routes>
      {/* <MovieTrailer2 /> */}
    </TrailerContext.Provider>
  );
};

export default App;

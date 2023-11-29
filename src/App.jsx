import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieStore from "./assets/pages/MovieStore";
import MovieDetails from "./assets/pages/MovieDetails";
import MainLayout from "./assets/layout/MainLayout";
import MovieStoreLayout from "./assets/layout/MovieStoreLayout";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* <Route path="/" element={<MovieStore />} />
      <Route path=":movieId" element={<MovieDetails />} /> */}

        <Route path="/" element={<MainLayout />}>
          <Route element={<MovieStoreLayout />}>
            <Route index element={<MovieStore />} />
            <Route path=":movieId" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;

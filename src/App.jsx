import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MoviesList from "./components/MoviesList/MoviesList";
import { Route, Routes } from "react-router-dom";
import fire from "../src/assets/fire.png";
import glowing from "../src/assets/glowing-star.png";
import partying from "../src/assets/partying-face.png";
import Movieid from "./components/MoviesList/Movieid";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList emoji={fire} head="Popular" type='popular'  />} />
        <Route
          path="/top_rated"
          element={<MoviesList emoji={glowing} head="Top Rated" type='top_rated' />}
        />
        <Route
          path="/upcoming"
          element={<MoviesList emoji={partying} head="Upcoming" type='upcoming' />}
        />
        <Route path="/movie/:id" element={<Movieid />} />
      </Routes>
    </div>
  );
};

export default App;

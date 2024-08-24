import React, { useEffect, useState } from "react";
import _ from 'lodash'

import "./MoviesList.css";
import Moviecard from "./Moviecard";
import FilterGroup from "./FilterGroup";

const MoviesList = ({emoji,head,type}) => {
  const [movies, setMovies] = useState([]);
  const [filtermovies, setFilterMovies] = useState([]);
  const [minRate, setMinRate] = useState(0);
  const [sortvalue, setSortValue] = useState({
    by: "default",
    asc: "ascending",
  });

  //Fetching data from API.
  useEffect(() => {
    const fetchmovies = async () => {
      const url =
        `https://api.themoviedb.org/3/movie/${type}?api_key=221f124990149104c066564e2aa80bf7#`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        setFilterMovies(data.results);
      } catch (error) {
        console.error("Fetch error :", error);
      }
    };
    fetchmovies();
  }, [type]);

  //for sorting by Lodash
  useEffect(()=>{
    if (sortvalue.by !== "default"){
      const sortedMovies =_.orderBy(filtermovies,[sortvalue.by],[sortvalue.asc])
      setFilterMovies(sortedMovies);

    }

  },[sortvalue])

  //filter rate
  const handleFilter = (rate) => {
    if (rate === minRate) {
      setMinRate(0);
      setFilterMovies(movies);
    } else {
      setMinRate(rate);
      // every filter will be for the original data
      const filteredMovies = movies.filter((movie) => {
        return movie.vote_average >= rate;
      });

      setFilterMovies(filteredMovies);
    }
  };

  //handle Sort
  const handleSort = (e) => {
    const { name, value } = e.target;
    setSortValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="movieslist">
      <header className="movieslist-header">
        <div className="left-header">
          <h2 className="popte">
            {head} <img className="fireimg" src={emoji} alt="fire" />
          </h2>
        </div>
        <div className="right-header">
          <FilterGroup
            minRate={minRate}
            handleFilter={handleFilter}
            rateArray={[8, 7, 6]}
          />

          <select name="by" id="sort" onChange={handleSort} value={sortvalue.by} >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select name="asc" id="scending" onChange={handleSort} value={sortvalue.asc} >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movscard">
        {filtermovies.map((movie, index) => {
          return <Moviecard movie={movie} key={index} />;
        })}
      </div>
    </main>
  );
};

export default MoviesList;

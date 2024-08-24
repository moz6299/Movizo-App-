import React from 'react';
import './Moviecard.css';
import star from '../../assets/star.png';
import { Link } from 'react-router-dom';

const Moviecard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}  className='moviecard'>
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <div className="movie-details-overlay">
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <div className="date-rate">
              <p>{movie.release_date}</p>
              <p className='rate'>{movie.vote_average} <img src={star} alt="star" /></p>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Moviecard;

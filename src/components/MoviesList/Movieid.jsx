import React from "react";
import './Movieid.css';
import { Link, useNavigate, useParams } from "react-router-dom";

const Movieid = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(navigate);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mvieid">
      <br />
      <h2>Movie id is : <span>{id}</span> </h2>
      <div className="mviebutns">
        <button onClick={handleBack} type="button">
          Back to Previous Page
        </button>

        <Link to={`https://www.themoviedb.org/movie/${id}`} target="_blank">
          <button type="button">Go to Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default Movieid;

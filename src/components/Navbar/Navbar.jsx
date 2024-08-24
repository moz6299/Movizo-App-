import React from "react";
import "./Navbar.css";
import fire from "../../assets/fire.png";
import glowing from "../../assets/glowing-star.png";
import partying from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><h1>Movzio</h1></Link>
      <div className="right-side">
        <DarkMode />
        <ul>
          <li>
            <NavLink  to={"/"}>
              Popular <img src={fire} alt="fire" />
            </NavLink>
          </li>
          <li>
            <NavLink  to={"/top_rated"}>
              Top Rated <img src={glowing} alt="glowing" /> 
            </NavLink>
          </li>
          <li>
            <NavLink  to={"/upcoming"}>
              Upcoming <img src={partying} alt="partying" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navigation2 = () => {
  let handleClick1 = () => {
    window.location = "https://www.facebook.com/profile.php?id=100082640416692";
  };
  let handleClick2 = () => {
    window.location = "https://www.instagram.com/lea.j_photographie/";
  };

  return (
    <div>
      <div className="navigation2">
        <ul>
          <NavLink to="/presentation" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Présentation</li>
          </NavLink>
          <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Contact</li>
          </NavLink>
        </ul>
        <ul>
          <li>
            <FaFacebook className="icons" name="icons" onClick={handleClick1} />
          </li>
          <li>
            <FaInstagram className="icons" name="icons" onClick={handleClick2} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation2;

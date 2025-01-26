import React from "react";
import { Link } from "react-router-dom";

import "./routernavbar.css";

const RouterNav = () => {
  return (
    <nav className="window_navbar">
      <Link className="window_link" to="/home">
        Inicio
      </Link>
      <Link className="window_link" to="/experience">
        Experiencia
      </Link>
    </nav>
  );
};

export default RouterNav;

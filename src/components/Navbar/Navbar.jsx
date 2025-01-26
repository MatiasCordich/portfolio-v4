import React, { useState } from "react";
import "./navbar.css";
import { AlignJustifyIcon } from "raster-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LangToggle from "../LangToggle/LangToggle";
import Clock from "../Clock/Clock";

const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
      <Clock/>
        <ul className="navbar_buttons">
          <LangToggle />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

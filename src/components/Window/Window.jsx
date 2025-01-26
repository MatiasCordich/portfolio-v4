import React from "react";
import { XIcon, SquareIcon, Tally1Icon } from "raster-react";
import "./window.css";
import RouterNav from "../../Router/RouterNav";
import { Outlet } from "react-router-dom";

const Window = () => {
  const rotate = {
    transform: "rotate(-90deg)",
  };
  return (
    <div className="window">
      <header className="window_header">
        <div className="window_header-label">
          <h4 className="window_header-title">Matias Cordich</h4>
          <div className="window_buttons">
            <button className="btn_window" style={rotate}>
              <Tally1Icon size={30} strokeWidth={0.25} radius={1} />
            </button>
            <button className="btn_window">
              <SquareIcon size={30} strokeWidth={0.25} radius={1} />
            </button>
            <button className="btn_window">
              <XIcon size={30} color="" strokeWidth={0.25} radius={1} />
            </button>
          </div>
        </div>
        <div className="router-nav">
          <RouterNav />
        </div>
      </header>

      <div className="window-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Window;

import React, { useState, useEffect } from "react";
import { XIcon, SquareIcon, Tally1Icon, UserIcon } from "raster-react";
import "./window.css";
import RouterNav from "../../Router/RouterNav";
import { Outlet } from "react-router-dom";

const Window = () => {
  const rotate = {
    transform: "rotate(-90deg)",
  };

  const [visible, setVisible] = useState(() => {
    return localStorage.getItem("ventanaVisible") === "false" ? false : true;
  });

  const [minimizada, setMinimizada] = useState(() => {
    return localStorage.getItem("ventanaMinimizada") === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("ventanaVisible", visible);
  }, [visible]);

  useEffect(() => {
    localStorage.setItem("ventanaMinimizada", minimizada);
  }, [minimizada]);

  return (
    <div className="window-container">
      
      {visible && (
        <div className={`window ${minimizada ? "minimizada" : ""}`}>
          <header className="window_header">
            <div className="window_header-label">
              <h4 className="window_header-title">Matias Cordich</h4>
              <div className="window_buttons">
                <button className="btn_window" style={rotate} onClick={() => setMinimizada(true)}>
                  <Tally1Icon size={30} strokeWidth={0.25} radius={1} />
                </button>
                <button
                  className="btn_window"
                  onClick={() => {
                    setVisible(false);
                    setMinimizada(false);
                  }}
                >
                  <XIcon size={30} strokeWidth={0.25} radius={1} />
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
      )}

     
      {!visible || minimizada ? (
        <button className="profile-icon" onClick={() => setVisible(true)}
        disabled={minimizada}>
          <UserIcon size={50} color="" strokeWidth={0.25} radius={1} />
          <p>Matias</p>
          <p>Cordich</p>
        </button>
      ) : null}

      {minimizada && visible && (
        <button className="window-min" onClick={() => setMinimizada(false)}>
          <UserIcon size={30} color="" strokeWidth={0.25} radius={1} />
          <div className="line"></div>
          Matias Cordich
        </button>
      )}
    </div>
  );
};

export default Window;

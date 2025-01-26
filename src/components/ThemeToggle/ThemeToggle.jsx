import React, { useState } from "react";
import { SunIcon, MoonIcon  } from "raster-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode); // Aplica la clase globalmente
  };
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <MoonIcon size={30} color="#000" strokeWidth={0.25} radius={1} /> : <SunIcon size={30} color="#000" strokeWidth={0.25} radius={1} />}
    </button>
  );

  
};

export default ThemeToggle;

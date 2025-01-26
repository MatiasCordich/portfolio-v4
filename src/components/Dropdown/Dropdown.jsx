import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ buttonLabel, options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (onSelect) onSelect(option);
    setIsOpen(false); // Cierra el dropdown después de seleccionar
  };

  return (
     <div className="dropdown">
      {/* Botón que muestra el título */}
      <button className="dropdown_btn" onClick={() => setIsOpen(!isOpen)}>
        {buttonLabel}
      </button>
      
      {/* Si el dropdown está abierto y hay opciones, muestra la lista */}
      {isOpen && options.length > 0 && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      
      {/* Si no hay opciones disponibles, muestra un mensaje */}
      {isOpen && options.length === 0 && (
        <div className="dropdown-empty">No options available</div>
      )}
    </div>
  );
};

export default Dropdown;

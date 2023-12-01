// Toggle.js
import React, { useContext } from "react";
import "./Toggle.css";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { themeContext } from "../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <HiLightBulb />
      <HiOutlineLightBulb />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;

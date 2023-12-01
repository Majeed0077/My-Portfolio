import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
import NumberCounter from "react-countup";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div
          className="cirlce"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
            zIndex: darkMode ? "999" : "",
          }}
        >
          1+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="cirlce"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
            zIndex: darkMode ? "100" : "",
          }}
        >
          <NumberCounter end={15} start={1} delay="5" prefix="+" />
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="cirlce"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
            zIndex: darkMode ? "100" : "",
          }}
        >
          1+
        </div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import "./widget.css";
import calIcon from "./icons/calories-icon.png";
import PropTypes from "prop-types";
/**
 *
 * @param { String } icon the Url of the icon
 * @param { Number } grammage a value 
 * @param {String } unit calories/proteins/glucides/Lipides
 * @returns
 */
function Widget({ icon, grammage, unit }) {
  return (
    <>
      <div className="widget-container">
        <div className="widget-icon">
          <img src={icon} alt={icon}></img>
        </div>

        <div className="grammage">
          <h2 className="grammage-text">{grammage}</h2>
          <h3 className="unit">{unit}</h3>
        </div>
      </div>
    </>
  );
}

Widget.propTypes = {
  icon: PropTypes.string,
  grammage: PropTypes.number,
  unit: PropTypes.string,
};
export default Widget;

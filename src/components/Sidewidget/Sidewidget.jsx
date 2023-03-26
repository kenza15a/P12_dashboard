import React from "react";
import "./sidewidget.css";
import PropTypes from "prop-types";
/**
 * 
 * @param {String} iconUrl the url of the icon
 * @param {String } alt the alernative text of the icon image
 * @returns  {HTMLElement} A sidebar widget
 */
function Sidewidget({ iconUrl, alt }) {
  return (
    <>
      <div className="icon">
        <img src={iconUrl} alt={alt}></img>
      </div>
    </>
  );
}
Sidewidget.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Sidewidget;

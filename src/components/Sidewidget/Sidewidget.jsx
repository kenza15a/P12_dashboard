import React from "react";
import "./sidewidget.css";
import PropTypes from "prop-types";
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
Sidewidget.defaultProps = {
  iconUrl:
    "https://www.google.fr/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Fgym-a-proximite_69840&psig=AOvVaw2beTQzwfgXMi7YENLOauUZ&ust=1674737747052000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiQgbbi4vwCFQAAAAAdAAAAABAE",
  alt: "icon",
};

export default Sidewidget;

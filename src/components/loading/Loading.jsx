import React from "react";
import "./loading.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
/**
 * Displays a loading message
@returns {HTMLElement}  A loading message
 */
function Loading() {
  return (
    <>
      <div className="loading">
        <p className="loading-message">please verify the path</p>
        <span className="notice">Please add "/Accueil/userId"</span>
      </div>
    </>
  );
}

export default Loading;

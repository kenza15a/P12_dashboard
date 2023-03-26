import React from "react";
import "./notfound.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NotFoundMessage from "../../components/NotFoundMessage/NotFoundMessage";
/**
 * 
 @returns {HTMLElement} Not found Page
 */
function Notfound() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <NotFoundMessage />
      </div>
    </>
  );
}

export default Notfound;

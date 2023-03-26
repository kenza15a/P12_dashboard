import React from "react";
import "./communite.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
/**
 * 
 * @returns {HTMLElement} the community page
 */
function Communite() {
  return (
    <>
      <>
        <Navbar />
        <div className="container">
          <Sidebar />
          <h1>Communauté page</h1>
        </div>
      </>
    </>
  );
}

export default Communite;

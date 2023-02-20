import React from "react";
import "./reglage.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
function Reglage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <h1>Reglage</h1>
      </div>
    </>
  );
}

export default Reglage;

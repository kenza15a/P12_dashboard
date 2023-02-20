import React from "react";
import "./notfound.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
function Notfound() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <h1 className="message-not-found">404 page introuvable</h1>
      </div>
    </>
  );
}

export default Notfound;

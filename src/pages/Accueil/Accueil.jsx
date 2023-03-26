import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./accueil.css";
import Loading from "../../components/loading/Loading";
import { useParams } from "react-router";
import { defaulUserId } from "../../config/config";
/**
 * 
 * @returns {HTMLElement} the homePage
 * }
 */
function Accueil() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Accueil;

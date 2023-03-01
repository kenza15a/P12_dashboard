import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./accueil.css";
import Loading from "../../components/loading/Loading";
import { useParams } from "react-router";
function Accueil() {
  let { id } = useParams();
  id = parseInt(id);
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />

        {id ? <Dashboard /> : <Loading />}
      </div>
    </>
  );
}

export default Accueil;

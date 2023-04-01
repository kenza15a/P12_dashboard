import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NotAvailableMessage from "../../components/NotAvailableMessage/NotAvailableMessage";
import Sidebar from "../../components/Sidebar/Sidebar";
function NotAvailablal() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <NotAvailableMessage />
      </div>
    </>
  );
}

export default NotAvailablal;

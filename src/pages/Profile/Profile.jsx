import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./profile.css";
import Barchartexp from "../../components/Barchartexp/Barchartexp";
/**
 * 
 @returns {HTMLElement} The profile page
 */
function Profile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <h1>Profile page</h1>
      </div>
    </>
  );
}

export default Profile;

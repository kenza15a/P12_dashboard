import React from "react";
import Copywrite from "../Copywrite/Copywrite";
import Sidewidget from "../Sidewidget/Sidewidget";
import icon1 from "./icons/icon.png";
import icon2 from "./icons/icon1.png";
import icon3 from "./icons/icon2.png";
import icon4 from "./icons/icon3.png";
import "./sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="vertical">
        <ul className="icon-list">
          <li>
            <Sidewidget iconUrl={icon1} />
          </li>
          <li>
            <Sidewidget iconUrl={icon2} />
          </li>
          <li>
            <Sidewidget iconUrl={icon3} />
          </li>
          <li>
            <Sidewidget iconUrl={icon4} />
          </li>
        </ul>
        <Copywrite />
      </div>
    </>
  );
}

export default Sidebar;

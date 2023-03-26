import React from "react";
import Skeleton from "react-loading-skeleton";
import "./widgetSkelton.css";
function WidgetSkelton() {
  return (
    <>
      <div className="widgets">
        <div className="widget-container-skel ">
          <div className="widget-icon-skel ">
            <Skeleton />
          </div>

          <div className="grammage-skel ">
            <Skeleton count={2} />
          </div>
        </div>
        <div className="widget-container-skel ">
          <div className="widget-icon-skel ">
            <Skeleton />
          </div>

          <div className="grammage-skel ">
            <Skeleton count={2} />
          </div>
        </div>
        <div className="widget-container-skel ">
          <div className="widget-icon-skel ">
            <Skeleton />
          </div>

          <div className="grammage-skel ">
            <Skeleton count={2} />
          </div>
        </div>
        <div className="widget-container-skel ">
          <div className="widget-icon-skel ">
            <Skeleton />
          </div>

          <div className="grammage-skel ">
            <Skeleton count={2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WidgetSkelton;

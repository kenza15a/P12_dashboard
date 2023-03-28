import React from "react";
import Skeleton from "react-loading-skeleton";
/**
 *
 * @returns  { HtmlElement } a skelton for charts
 */
function ChartSkelton() {
  return (
    <>
      <Skeleton width={180} height={180} />
    </>
  );
}

export default ChartSkelton;

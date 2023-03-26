import React from "react";
import { Text } from "recharts";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./redarchart.css";
/**
 * Returns the radarchart using the users performance data 
 * @component
 ** @param {Array.<Object>} data
 * @returns
 */
function Radarchartexp({ data }) {
  return (
    <>
      <ResponsiveContainer
        className="redar"
        width="100%"
        height="100%"
        data={data}
      >
        <RadarChart cx="50%" cy="50%" data={data} outerRadius="70%">
          <PolarGrid radialLines={false} stroke="white" fill="#ffffff" sp />
          <PolarAngleAxis dataKey="kindType" />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill="red"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}
Radarchartexp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
      kindType: PropTypes.string,
    })
  ),
};

export default Radarchartexp;

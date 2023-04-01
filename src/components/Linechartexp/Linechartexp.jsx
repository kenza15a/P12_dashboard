import React from "react";
import "./linechartexp.css";
import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
/**
 *
 *Displays the linechart
 ** @param {Array.<Object>} data
 * @returns  {React.ReactElement}.
 */
function Linechartexp({ data }) {
  //rework the gray area
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="linechart-tooltip">
          <p className="session-length">{` ${payload[0].value}`} min</p>
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart className="redchart" data={data}>
          <CartesianGrid opacity={0} />

          <text x="10%" y="20%" fill="white" fillOpacity="0.5" fontSize={15}>
            <tspan> Durée</tspan>
            <tspan x="10%" dy="20">
              de la session
            </tspan>
          </text>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
          />
          <XAxis
            dataKey="lDay"
            strokeOpacity={0}
            style={{
              fontSize: "0.8rem",
              fontFamily: "Roboto",
              fill: "white",
              opacity: "0.8",
            }}
          />
          <Tooltip
            content={CustomTooltip}
            wrapperStyle={{ outline: "none" }}
            active={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
Linechartexp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
      lDay: PropTypes.string,
    })
  ).isRequired,
};
export default Linechartexp;

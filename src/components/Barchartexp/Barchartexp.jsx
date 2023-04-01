import React from "react";
import PropTypes from "prop-types";

import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./barchart.css";
/**
 *
 *
 * Displays the barchart on the dashboard
 ** @param {Array.<Object>} data
 * @return  {React.ReactElement}
 * ]
 *
 */
function Barchartexp({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{` ${payload[0].value} g`}</p>
          <p>{` ${payload[1].value} kcal`}</p>
        </div>
      );
    }

    return null;
  };
  const CustomLegend = ({ payload }) => (
    <ul className="horizontal-legend">
      <li className="red">
        <span>Poids (kg) </span>
      </li>
      <li className="black">
        <span> calories brulées (kCal)</span>
      </li>
    </ul>
  );
  //user_activity
  return (
    <>
      <ResponsiveContainer height="100%" width="90%" className="barchart">
        <BarChart width="100%" data={data} className="barchart-container">
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey="indice"
            stroke="#DEDEDE"
            style={{
              fontSize: "1rem",
              fontFamily: "Roboto",
              fill: "black",
              opacity: "1",
            }}
          />
          <YAxis orientation="right" minTickGap={40} stroke="" type="number" />
          <Tooltip content={CustomTooltip} wrapperStyle={{ outline: "none" }} />

          <Legend
            content={CustomLegend}
            verticalAlign="top"
            height={36}
            iconSize={5}
            align="right"
            iconType="circle"
            layout="horizontal"
            wrapperStyle={{
              fontSize: "1rem",
              color: "gray",
            }}
          />
          <text className="barchart-title" x={20} y={20}>
            <tspan> Activité quotidienne</tspan>
          </text>

          <Bar
            dataKey="kilogram"
            fill="#000000"
            barSize={9}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={9}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

Barchartexp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
      indice: PropTypes.number,
    })
  ).isRequired,
};
export default Barchartexp;

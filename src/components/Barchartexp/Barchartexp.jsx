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
 * Some documented component
 *
 * @component
 ** @param {Array.<Object>} data
 * @return 
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
            formatter={(value, entry, index) => (
              <span className="legend-color-class">{value}</span>
            )}
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
          <text>Activité quotidienne</text>

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
  ),
};
export default Barchartexp;

import React from "react";
import PropTypes from "prop-types";

import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import "./radialChart.css";
/**
 * Displays a raidalbarchart representing the achievement of the user comparing to their daily goal
 * ** @param {Array.<Object>} data
 */

function Piechartexp({ data }) {
  const circleSize = 300;

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius={74}
          outerRadius={130}
          barSize={10}
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]} /**  domaine de definition */
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey="todayScore"
            cornerRadius={circleSize / 2}
            fill="#FF0000"
          />
          <text
            x={circleSize / 4}
            y={circleSize / 4}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan className="objectif-value" x="50%" y="50%">
              {data[0].todayScore * 100 + " % "}
            </tspan>
            <tspan className="objectif-text" x="50%" dy="20">
              de votre objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}
//todayScore
Piechartexp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      todayScore: PropTypes.number,
    })
  ).isRequired,
};

export default Piechartexp;

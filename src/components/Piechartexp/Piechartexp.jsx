import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import "./pieChart.css";
function Piechartexp({ data }) {
  //const COLORS = ["#FF0000", "#FFFFFF"];
  //const textT = data[0].todayScore * 100 + " %";
  // const textB = "  de votre objectif";

  const circleSize = 300;
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={300}
          height={300}
          cx={circleSize / 3}
          cy={circleSize / 3}
          innerRadius={80}
          outerRadius={120}
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
            x={circleSize / 3}
            y={circleSize / 3}
            textAnchor="middle"
            dominantBaseline="middle"
            className="objectif-value "
          >
            {data[0].todayScore * 100 + " % "}
          </text>
          <text
            x={circleSize / 3}
            y={circleSize / 3 + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#74798C"
            className="objectif "
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
  /*return (
    <>
      <ResponsiveContainer>
        <PieChart width={800} height={400}>
          <g>
            {" "}
            <text
              className="objectif-text"
              x={120}
              y={130}
              dy={8}
              textAnchor="middle"
              fill="#000000"
            >
              {textT}
            </text>
            <text
              className="objectif-text"
              x={120}
              y={160}
              dy={8}
              textAnchor="middle"
              fill="#000000"
            >
              {textB}
            </text>
          </g>
          <Pie
            data={data}
            startAngle={180}
            endAngle={-180}
            innerRadius={80}
            outerRadius={95}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="todayScore"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );*/
}

export default Piechartexp;

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./redarchart.css";
function Radarchartexp({ data }) {
  /*const data = [
    {
      performance: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      performance: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      performance: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      performance: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      performance: "Energie",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      performance: "Cardio",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];*/
  return (
    <>
      <ResponsiveContainer className="redar" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
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

export default Radarchartexp;

import React from "react";
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import "./barchart.css";
function Barchartexp({ data }) {
  //user_activity
  return (
    <>
      <ResponsiveContainer height={200} width="100%" className="barchart">
        <BarChart width="100%" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="indice" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="kilogram"
            fill="#black"
            barSize={15}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={15}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchartexp;

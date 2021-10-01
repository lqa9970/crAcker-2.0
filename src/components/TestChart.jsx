import { Legend } from "chart.js";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

const TestChart = ({ tableData }) => {
  const { day, week, month, year, detail } = tableData;
  console.log(tableData.day);

  const renderLabel = () => {
    return detail.name;
  };

  return (
    <div>
      <div className="mt-2 rounded p-3">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={tableData.month}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Label dataKey="a" />
            <Area
              label={renderLabel}
              type="natural"
              dataKey="price"
              stroke="#2451B7"
            />
            <XAxis dataKey="time" />
            <YAxis dataKey="price" />
            <Legend />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TestChart;

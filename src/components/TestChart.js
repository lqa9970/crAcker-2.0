import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  CartesianGrid,
} from "recharts";

const TestChart = ({ tableData }) => {
  const { day, week, month, year, detail } = tableData;
  const [timeType, setTimeType] = useState("24h");

  const changeTimeType = () => {
    switch (timeType) {
      case "24h":
        return tableData.day;
      case "7d":
        return tableData.week;
      case "30d":
        return tableData.month;
      case "365d":
        return tableData.year;
      default:
        return tableData.day;
    }
  };

  const renderLabel = () => {
    if (detail) {
      return (
        <>
          <p className="my-0 text-dark text-center">
            {detail.name} price trend
          </p>
        </>
      );
    }
  };

  const renderPriceChange = () => {
    if (detail) {
      return (
        <>
          <img src={detail.image} alt={detail.name} className="coin-image" />
          <p className="font30 my-0 white">
            €{detail.current_price.toFixed(2)}
          </p>
          <p
            className={
              detail.price_change_percentage_24h < 0
                ? "font20 text-danger mb-4"
                : "font20 text-success mb-4"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div>
      <div className="mt-2 rounded p-3">
        <div>{renderPriceChange()}</div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={changeTimeType()}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Label dataKey="a" />
            <Area
              label={renderLabel}
              type="natural"
              dataKey="price"
              stroke="#2451B7"
            />
            <XAxis className="ocean" dataKey="time" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="grey" />
          </AreaChart>
        </ResponsiveContainer>
        <span>{renderLabel()}</span>
        <div className="chart-button mt-1 text-center">
          <button
            onClick={() => {
              setTimeType("24h");
            }}
            className="btn btn-outline-secondary shadow-sm btn-sm m-3 p-3"
          >
            1d
          </button>
          <button
            onClick={() => {
              setTimeType("7d");
            }}
            className="btn btn-outline-secondary shadow-sm btn-sm m-3 p-3"
          >
            1w
          </button>
          <button
            onClick={() => {
              setTimeType("30d");
            }}
            className="btn btn-outline-secondary shadow-sm btn-sm m-3 p-3"
          >
            1m
          </button>
          {/* <button
            onClick={() => {
              setTimeType("365d");
            }}
            className="btn btn-outline-secondary btn-sm m-3 p-3"
          >
            1y
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TestChart;

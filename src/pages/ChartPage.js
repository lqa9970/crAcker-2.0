import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../components/CoinChart";
import coinAPI from "../api/coinGecko";
import TestChart from "../components/TestChart";

const ChartPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeData = (data) => {
    return data.map((el) => {
      return {
        time: el[0],
        price: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, month, year, detail] = await Promise.all([
        coinAPI.get(`coins/${id}/market_chart`, {
          params: { vs_currency: "eur", days: "1" },
        }),
        coinAPI.get(`coins/${id}/market_chart`, {
          params: { vs_currency: "eur", days: "7" },
        }),
        coinAPI.get(`coins/${id}/market_chart`, {
          params: { vs_currency: "eur", days: "30" },
        }),
        coinAPI.get(`coins/${id}/market_chart`, {
          params: { vs_currency: "eur", days: "365" },
        }),
        coinAPI.get("/coins/markets/", {
          params: {
            vs_currency: "eur",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: changeData(day.data.prices),
        week: changeData(week.data.prices),
        month: changeData(month.data.prices),
        year: changeData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderChart = () => {
    if (isLoading) {
      <div className="">Loading....</div>;
    }
    return (
      <div className="coin-chart">
        {/* <CoinChart data={coinData} /> */}
        <TestChart tableData={coinData} />
      </div>
    );
  };

  return renderChart();
};

export default ChartPage;

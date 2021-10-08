import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import CoinChart from "../components/CoinChart";
import coinAPI from "../api/coinGecko";
import TestChart from "../components/TestChart";
import CoinData from "../components/CoinData";

const ChartPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const convertTime = (x) => {
    let options = { day: "numeric", month: "2-digit" };
    return new Date(x).toLocaleDateString("fi-FI", options);
  };

  const convertTimeInDay = (x) => {
    let options = { hour: "2-digit", minute: "2-digit" };
    return new Date(x).toLocaleTimeString([], options);
  };

  const changeData = (data) => {
    return data.map((el) => {
      if ((data = coinData.day)) {
        return {
          time: convertTimeInDay(el[0]),
          price: el[1].toFixed(3),
        };
      } else {
        return {
          time: convertTime(el[0]),
          price: el[1].toFixed(3),
        };
      }
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
    console.log(coinData.data);
  }, []);

  const renderChart = () => {
    if (isLoading) {
      <div className="">Loading....</div>;
    }
    return (
      <div className="coin-chart">
        {/* <CoinChart data={coinData} /> */}
        <TestChart tableData={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    );
  };

  return renderChart();
};

export default ChartPage;

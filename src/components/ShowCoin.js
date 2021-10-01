import React, { useEffect, useState } from "react";
import coinAPI from "../api/coinGecko";
// import WatchListContext from "../context/watchListContext";
import Coin from "../components/Coin";

const ShowCoin = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const watchList = useContext(WatchListContext);
  const [coinList, setCoinList] = useState([
    "bitcoin",
    "ethereum",
    "tether",
    "dogecoin",
  ]);
  // const handleDeleteCoins = useContext(WatchListContext);

  const handleDeleteCoins = (coin) => {
    setCoinList(
      coinList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const renderCoin = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    } else {
      return (
        <ul>
          {coins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                coin={coin}
                handleDeleteCoins={handleDeleteCoins}
              />
            );
          })}
        </ul>
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinAPI.get("/coins/markets/", {
        params: {
          vs_currency: "eur",
          ids: coinList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (coinList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [coinList]);

  return <div>{renderCoin()}</div>;
};

export default ShowCoin;

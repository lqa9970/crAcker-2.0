import React, { useEffect, useState } from "react";
import coinAPI from "../api/coinGecko";
// import WatchListContext from "../context/watchListContext";
import Coin from "../components/Coin";
import AddCoin from "../components/AddCoin";
import CoinAnimation from "../components/CoinAnimation/CoinAnimation";

const ShowCoin = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const watchList = useContext(WatchListContext);
  const [coinList, setCoinList] = useState(["bitcoin", "ethereum", "tether"]);
  // const handleDeleteCoins = useContext(WatchListContext);

  const handleAddCoins = (coin) => {
    if (coinList.indexOf(coin) === -1) {
      setCoinList([...coinList, coin]);
    }
  };

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
        <div className="coin-summary shadow-lg border p-2 rounded mt-2 bg-light">
          <AddCoin handleAddCoins={handleAddCoins} />
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
        </div>
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

import React, { createContext, useState } from "react";

const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([
    "bitcoin",
    "ethereum",
    "tether",
    "dogecoin",
  ]);

  // const providerValue = {
  //   watchList,
  //   handleDeleteCoins,
  // };

  return (
    <WatchListContext.Provider value={watchList}>
      {props.children}
    </WatchListContext.Provider>
  );
};

export default WatchListContext;

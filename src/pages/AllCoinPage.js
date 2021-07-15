import React from "react";
import AddCoin from "../components/AddCoin";
import ShowCoin from "../components/ShowCoin";

const AllCoinPage = () => {
  return (
    <div className="coin-summary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <ShowCoin />
    </div>
  );
};

export default AllCoinPage;

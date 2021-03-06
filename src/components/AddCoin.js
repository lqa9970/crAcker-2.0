import React from "react";
import { Dropdown } from "react-bootstrap";

const AddCoin = ({ handleAddCoins }) => {
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "tether",
    "cardano",
    "binancecoin",
    "ripple",
    "solana",
    "usd-coin",
    "polkadot",
    "dogecoin",
    "okb",
    "tezos",
    "eos",
    "litecoin",
  ];

  const handleClick = (coin) => {
    handleAddCoins(coin);
  };

  return (
    <div>
      {/* <button className="btn btn-primary dropdown-toggle" type="button">
        Add coin here
      </button>
      <div className="dropdown-menu">
        {availableCoins.map((el) => {
          return <a href="" className="dropdown-item"></a>;
        })}
      </div> */}
      <Dropdown className="m-3 text-center">
        <Dropdown.Toggle id="dropdown-basic" className="p-3 ocean">
          Add more coins here!
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {availableCoins.map((el) => {
            return (
              <Dropdown.Item
                key={availableCoins.indexOf(el)}
                onClick={() => handleClick(el)}
              >
                {el}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AddCoin;

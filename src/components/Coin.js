import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, handleDeleteCoins }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li
        className="coin-item list-group-item list-group-item-action
       d-flex justify-content-between align-items-center"
      >
        <img src={coin.image} alt={coin.name} className="coin-image" />
        <span className="text-decoration-none">€ {coin.current_price}</span>

        <span
          className={
            coin.price_change_percentage_24h > 0
              ? "text-success mr-2"
              : "text-danger mr-2"
          }
        >
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {coin.price_change_percentage_24h}%
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            handleDeleteCoins(coin.id);
          }}
          className="far fa-times-circle text-danger delete-icon"
        ></i>
      </li>
    </Link>
  );
};

export default Coin;

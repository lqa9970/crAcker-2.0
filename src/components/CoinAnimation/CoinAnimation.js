import React from "react";
import styles from "./ani.module.css";

const CoinAnimation = () => {
  return (
    <div className={styles.ballBar}>
      <div className={styles.bar}>
        <img
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          alt="bitcoin rolling"
          className={styles.rollingCoin}
        ></img>
      </div>
    </div>
  );
};

export default CoinAnimation;

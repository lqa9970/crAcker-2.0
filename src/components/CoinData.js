import React from "react";

const CoinData = ({ data }) => {
  const showData = () => {
    if (data) {
      return (
        <div className="text-muted mt-3 p-2 shadow rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-cetegory">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-cetegory">Volume (24h)</span>
              <span>{data.total_volume}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-category">Total Supply</span>
              <span>{data.total_supply ? data.total_supply : "N/A"}</span>
            </div>

            <hr />
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-category">High (24h)</span>
              <span>€{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-cetegory">
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-dark coin-data-category">Low (24h)</span>
              <span>€{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="">{showData()}</div>
      <div className="text-center"></div>
    </div>
  );
};

export default CoinData;

import React from "react";
import AddCoin from "../components/AddCoin";
import ShowCoin from "../components/ShowCoin";
import CoinAnimation from "../components/CoinAnimation/CoinAnimation";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AllCoinPage = () => {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/showcoin">ShowCoin</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       <Route path="/addcoin">
    //         <AddCoin />
    //       </Route>
    //       <Route path="/showcoin">
    //         <ShowCoin />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <>
      <div>
        <ShowCoin />
      </div>
      <CoinAnimation />
    </>
  );
};

export default AllCoinPage;

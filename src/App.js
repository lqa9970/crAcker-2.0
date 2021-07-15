import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ChartPage from "./pages/ChartPage";
import AllCoinPage from "./pages/AllCoinPage";
import Nav from "./components/Nav";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={AllCoinPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;

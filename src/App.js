import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Coupons from "./Components/Coupons";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Coupons">
            <Coupons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

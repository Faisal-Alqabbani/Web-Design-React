import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";

import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

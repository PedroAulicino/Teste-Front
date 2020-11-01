import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./App";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Root;

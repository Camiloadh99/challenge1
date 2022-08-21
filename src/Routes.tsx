import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainComponent } from "components";
import "constants/constants.css";
import "constants/responsive.css";
import "constants/variables.css";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/test" component={MainComponent} />
      </Switch>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import BasicJSX from "./Chapter1_JSX/BasicJSX";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/chapter1"
        render={(props) => (
          <React.Fragment>
            <Route
              exact
              path={`${props.match.url}/basic-jsx`}
              component={BasicJSX}
            />
          </React.Fragment>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

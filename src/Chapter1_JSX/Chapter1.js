import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import BasicJSX from "./BasicJSX";

const Chapter1 = () => {
  return (
    <Switch>
      <Route path="/basicjsx" component={BasicJSX} />
    </Switch>
  );
};

export default Chapter1;

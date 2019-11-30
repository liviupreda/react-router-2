import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import Navbar from "./Navbar";
import FoodSearch from "./FoodSearch";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/food/:name" component={Food} /> */}
        <Route
          exact
          path="/food/:name"
          render={routeProps => <Food isAuthenticated="true" {...routeProps} />}
        />
      </div>
    );
  }
}

export default App;

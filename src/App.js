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
        <Navbar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={routeProps => (
              <Food isAuthenticated="true" {...routeProps} />
            )}
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          <Route
            exact
            path="/"
            render={routeProps => <FoodSearch {...routeProps} />}
            // if no other props, component = {FoodSearch} instead of render works as well
          />
          <Route render={() => <h1>ERROR NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;

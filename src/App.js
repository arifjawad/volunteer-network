import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import AddEvents from "./components/AddEvents/AddEvents";
import Events from "./components/Events/Events";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/events">
          {/* <Events /> */}
          <Home />
        </Route>
        <Route path="/addEvents">
          <AddEvents></AddEvents>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

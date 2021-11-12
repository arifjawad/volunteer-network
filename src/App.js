import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/AdminPanel/Dashboard"
import VolunteerList from "./pages/AdminPanel/VolunteerList/VolunteerList"

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
        <Route path="/dashboard/volunteers" >
          < VolunteerList />
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;

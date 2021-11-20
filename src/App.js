import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Dashboard from "./pages/AdminPanel/Dashboard"
import VolunteerList from "./pages/AdminPanel/VolunteerList/VolunteerList"
import AddEvents from "./pages/AdminPanel/AddEvents/AddEvents";
import Notfound from "./pages/Notfound/Notfound";
import ViewEvents from './pages/AdminPanel/ViewEvents/ViewEvents';

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
          <Events />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/dashboard/volunteers">
          <VolunteerList />
        </Route>
        <Route exact path="/dashboard/add-events">
          <AddEvents />
        </Route>
        <Route exact path="/dashboard/view-events" component={ViewEvents}>

        </Route>

        <Route exact path="/dashboard/settings">
          <Redirect from='/dashboard/settings' to='/404' />
        </Route>

        <Route path='/404' component={Notfound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Router>
  );
}

export default App;

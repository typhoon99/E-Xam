import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Classes from "./pages/student/Classes";
import App from "../App";
// import Home from "./pages/student/Home";

export default class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            {/* Route:Login Page */}
            <Route path="/" exact>
              <App />
            </Route>

            {/* Route:Empty page
            <Route path="/home" exact>
              <Home></Home>
            </Route> */}
          
            {/* Route:All Classes  */}
            <Route path="/classes" exact component={Classes}></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

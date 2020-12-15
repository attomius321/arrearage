import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './pages/Home/Home'
  import Features from './pages/Features/Features'

const createRoutes = () => (
    <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/features">
            <Features/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
);

export default createRoutes;
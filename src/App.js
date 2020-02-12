import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/education" component={Education} /> */}
            {/* <Route exact path="/affiliates" component={Affiliates} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

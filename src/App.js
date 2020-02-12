import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Affiliates from './components/Affiliates';
import Education from './components/Education';
import History from './components/History';
import MyAccount from './components/MyAccount';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/affiliates" component={Affiliates} />
            <Route exact path="/history" component={History} />
            <Route exact path="/myaccount" component={MyAccount} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

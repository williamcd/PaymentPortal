import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Affiliates from './components/Affiliates';
import Education from './components/Education';
import History from './components/History/History';
import MyAccount from './components/MyAccount';
import Reset from './components/Reset';
import Payments from './components/Payments';


function App() {
  return (
    <div>
      <BodyAlignment>
        <Router>
          <Nav />
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/affiliates" component={Affiliates} />
              <Route exact path="/history" component={History} />
              <Route exact path="/myaccount" component={MyAccount} />
              <Route exact path="/reset" component={Reset} />
              <Route exact path="/payments" component={Payments} />
            </Switch>
          </div>
        </Router>
      </BodyAlignment>
      <Footer />
    </div>
  );
}
const BodyAlignment = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export default App;

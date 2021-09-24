import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Organization from './Organization';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/organization">
          <Organization />
        </Route>
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;

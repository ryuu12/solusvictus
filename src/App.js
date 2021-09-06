import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div> 
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
    </Router> 
  );
}

export default App;

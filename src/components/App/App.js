import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
//
//
import Home from '../Home/Home';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        {/*  */}
        {/*  */}
      </div>
    </div>
  </Router>
);

export default App;

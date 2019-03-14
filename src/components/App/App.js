import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import Home from '../Home/Home';
import Hangman from '../hangman/Hangman';
import ShifumiContainer from '../shifumi/ShifumiContainer';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/shifumi">Shifumi</Link>
        <Link to="/hangman">Hangman</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/hangman" component={Hangman} />
        <Route path="/shifumi" component={ShifumiContainer} />
      </div>
    </div>
  </Router>
);

export default App;

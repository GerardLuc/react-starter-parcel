import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import ChifoumiContainer from '../Chifoumi/ChifoumiContainer';
import HangmanContainer from '../Hangman/HangmanContainer';
import Hangman from '../Hangman/Hangman';
import Chifoumi from '../Chifoumi/Chifoumi';

import Home from '../Home/Home';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/hangman">Hangman Game</Link></li>
        <li><Link to="/chifoumi">Chifoumi game</Link></li>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/hangman" component={HangmanContainer} />
        <Route path="/chifoumi" component={ChifoumiContainer} />
      </div>
    </div>
  </Router>
);

export default App;

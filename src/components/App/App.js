import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import HangmanContainer from '../Hangman/HangmanContainer';
import Hangman from '../Hangman/Hangman';
import ShifumiContainer from '../Shifumi/ShifumiContainer';
import Shifumi from '../Shifumi/Shifumi';
import Home from '../Home/Home';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/counter">Counter</Link>
            </li>
          <li>
            <Link to="/hangman">Hangman Game</Link>
            </li>
          <li>
            <Link to="/shifumi">Shifumi Game</Link>
            </li>
        </ul>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/hangman" component={Hangman} />
        <Route path="/hangman" component={HangmanContainer} />
        <Route path="/shifumi" component={Shifumi} />
        <Route path="/shifumi" component={ShifumiContainer} />
      </div>
    </div>
  </Router>
);

export default App;

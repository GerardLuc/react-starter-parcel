import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import HangmanContainer from '../Hangman/HangmanContainer';
import ShifumiContainer from '../Shifumi/ShifumiContainer';
import Home from '../Home/Home';

const App = () => (
  <Router>
    <div className="container">
    <nav>
        <Link to="/">Home</Link><br />
        <Link to="/counter">Counter</Link><br />
        <Link to="/hangman">Hangman</Link><br />
        <Link to="/shifumi">Shifumi</Link><br />
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/hangman" component={HangmanContainer} />
        <Route path="/shifumi" component={ShifumiContainer} />
      </div>
    </div>
  </Router>
);

export default App;

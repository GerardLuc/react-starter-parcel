import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import Home from '../Home/Home';
import hangman from '../Hangman/hangman';
import shifoumiContainer from '../Shifoumi/shifoumiContainer';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/hangman">Hangman</Link>
        <Link to="/shifoumi">Shifoumi</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={CounterContainer} />
        <Route path="/hangman" component={hangman} />
        <Route path="/shifoumi" component={shifoumiContainer} />
        
      </div>
    </div>
  </Router>
);

export default App;

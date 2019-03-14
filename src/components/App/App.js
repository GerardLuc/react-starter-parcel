import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import Home from '../Home/Home';
import Hangman from '../Hangman/Hangman';
import ShifumiContainer from '../Shifumi/ShifumiContainer';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/Hangman">Hangman</Link>
        <Link to="/Shifumi">Shifumi</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Counter" component={CounterContainer} />
        <Route path="/Hangman" component={Hangman} />
        <Route path="/Shifumi" component={ShifumiContainer} />
        
      </div>
    </div>
  </Router>
);

export default App;

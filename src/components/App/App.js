import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </div>
  </Router>
);

export default App;

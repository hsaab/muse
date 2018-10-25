import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home.js";
import Success from "./containers/Success.js";
import './styles/App.css';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/success" exact component={Success}/>
    </div>
  </Router>
);

export default App;

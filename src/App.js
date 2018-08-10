import React from 'react';
import { Provider } from "react-redux";
import Home from "./containers/Home.js";
import './styles/App.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Home/>
  </Provider>
);

export default App;

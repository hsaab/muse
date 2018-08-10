import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Reducer from './redux/reducer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root'));

registerServiceWorker();

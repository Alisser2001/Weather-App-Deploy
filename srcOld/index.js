import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

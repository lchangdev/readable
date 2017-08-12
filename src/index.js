import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  /**
   * @name Provider
   * @description Provider is provided by react-redux
   *              The magic behind Provider is React's context feature
   *              Allows connect() to work properly
   */
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { checkValidBusstop } from './store/middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(checkValidBusstop, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

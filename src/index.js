import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

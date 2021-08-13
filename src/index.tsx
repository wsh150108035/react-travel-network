import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import "./i18n/configs";
import { Provider } from 'react-redux'
import rootstore from './redux/store';
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'

axios.defaults.headers['x-icode'] = "B5052179AFA61ABB"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootstore.store}>
      <PersistGate persistor={rootstore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import Home from './comnponents/Home';
import './index.css';
import { store } from './redux/store/store';
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store} >
    <Home />
  </Provider>
  ,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App'

// ステートを用意・初期値
const stateValue = {
  counter: 0,
  message: 'COUNTER',
}

// レデューサー
function counter(state = stateValue, action ) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'INCREMENT'
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: 'DECREMENT'
      };
    default:
      return state;
  }
}

// ストアの作成
let store = createStore(counter);

// 表示のレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

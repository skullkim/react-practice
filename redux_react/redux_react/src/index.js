import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//크롬 확장 개발자 도구인 Redux DevTools를 사용하기 위한 세팅
import {composeWithDevTools} from "redux-devtools-extension";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  //리액트 컴포넌트에서 스토어를 사용할 수 있게 App컴포넌트를 react-redux에서 제공하는
    //Provider 컴포넌트로 감싼다
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

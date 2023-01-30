import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// 0. 下包react-redux, 导入Provider组件
// 0. 在index.js中，创建store，
ReactDOM.render(
  // 1. 通过Provider绑定redux和react
  // 💥 Provider包住App组件，并且设置store属性，store属性的值就是创建的store仓库
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

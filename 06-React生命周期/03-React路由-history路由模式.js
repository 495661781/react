import React from 'react';

/*
  学习目标：将路由模式切换为history路由
  步骤：
     1. 导入BrowserRouter路由
     2. 使用BrowserRouter保住所有的代码
  注意：
    Router相当于是在实例化路由，整个应用中调用一次

  推荐：
    1. 👍通过as将HashRouter或BrowserRouter 重命名为Router
*/

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>app组件</h1>
          <Link to="/home">跳到首页</Link>
          <br />
          <Link to="/my">跳到我的音乐</Link>
          <br />
          <Link to="/friend">跳到朋友</Link>

          <Route path="/home" component={Home}></Route>
          <Route path="/my" component={MyMusic}></Route>
          <Route path="/friend" component={Friend}></Route>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h1>我是首页组件</h1>;
}

function MyMusic() {
  return <h1>我是我的音乐件</h1>;
}

function Friend() {
  return <h1>我是朋友组件</h1>;
}

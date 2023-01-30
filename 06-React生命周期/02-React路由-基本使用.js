import React from 'react';
// 1. 下包 react-router-dom@5.3
// 2. 导入三个组件
import { HashRouter, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      // 3. HashRouter 负责实例化路由 ：负责实例化路由，类似Vue中的new VueRouter
      // 💥 需要包住所有的代码
      <HashRouter>
        <div>
          <h1>app组件</h1>
          {/* 5. 通过Link组件去跳转， 💥to属性指定跳转路径，需要带上/ */}
          <Link to="/home">跳到首页</Link>
          <br />
          <Link to="/my">跳到我的音乐</Link>
          <br />
          <Link to="/friend">跳到朋友</Link>

          {/*  4. Route负责: 设置规则对象和挂载点 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/my" component={MyMusic}></Route>
          <Route path="/friend" component={Friend}></Route>
        </div>
      </HashRouter>
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

import React from 'react';

/*
  学习目标：Swith组件的使用和设置404
*/

import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>app组件</h1>
          <NavLink to="/home" activeClassName="my-active" exact>
            跳到首页
          </NavLink>
          <br />
          <Link to="/my">跳到我的音乐</Link>
          <br />
          <Link to="/friend">跳到朋友</Link>

          {/* localhost: 3000/home */}
          <Switch>
            {/* Switch组件的作用：匹配到第一个Route组件之后，就不再向下匹配 */}
            {/* 🔔 通常Switch要包住所有的Route组件 */}
            <Route path="/friend" component={Friend}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/my" component={MyMusic}></Route>
            <Route path="/home" component={Home}></Route>
            {/* 不写path通常用来做404， 💥 注意要写在最后面 */}
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function NotFound(params) {
  return <h1>我是404页面</h1>;
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

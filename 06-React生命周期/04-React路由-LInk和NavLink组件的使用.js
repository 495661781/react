import React from 'react';

/*
  学习目标：掌握Link和NavLink的使用
  作用：都是跳转路由
  不同： 
    1. NavLink可以做高亮，Link不行
    2. NavLink自定义高亮类名：通过activeClassName这个属性，自定义
    3. exact 表示精准匹配， 写在NavLink上

  🔔精准匹配： url上的路径 === to属性的值   /home  /home
  🔔模糊匹配： url上的路径 包含 to属性的值  /home/123  /home
*/

import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>app组件</h1>
          {/* exact 精准匹配 */}
          <NavLink to="/home" activeClassName="my-active" exact>
            跳到首页
          </NavLink>
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

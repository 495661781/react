import React from 'react';

/*
  学习目标：React设置嵌套路由
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

          <Switch>
            {/* 注意3：💥 嵌套路由中，父级路由，一般不能加exact */}
            <Route path="/friend" component={Friend} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/my" component={MyMusic}></Route>
            <Route path="/home" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Friend() {
  return (
    <div>
      <hr />
      <h1>我是Friend父组件</h1>
      <Link to="/friend">朋友1</Link>
      <br />
      <Link to="/friend/second">朋友2</Link>
      <br />
      {/* 2. to属性跳转路由，需要从/开始写 */}
      <Link to="/friend/third">朋友3</Link>
      {/* 1. 在父组件内容，使用Swtich和Route组件设置二级路由匹配规则 */}
      <Switch>
        {/* 注意1：💥 二级路由，需要写成完整路由：从一级路由开始写 */}
        {/* 注意2：💥 父子级路径时可以同名的， 并且同时显示 */}
        <Route path="/friend" component={Friend1} exact></Route>
        <Route path="/friend/second" component={Friend2}></Route>
        <Route path="/friend/third" component={Friend3}></Route>
      </Switch>
    </div>
  );
}

function Friend1() {
  return <h1>我是朋友1</h1>;
}

// 0. 新建二级组件
function Friend2() {
  return <h1>我是朋友2</h1>;
}
function Friend3() {
  return <h1>我是朋友3</h1>;
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

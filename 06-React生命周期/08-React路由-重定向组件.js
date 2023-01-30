import React from 'react';

/*
  学习目标：使用重定向组件，将 / => /home
*/

import { Route, Link, BrowserRouter as Router, NavLink, Switch, Redirect } from 'react-router-dom';
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
            {/* 💥 重定向组件一般要配合exact使用 */}
            {/* from表示匹配到哪个路径时，开始重定向 */}
            {/* to表示匹配到哪里 */}
            <Redirect from="/" to="/home" exact></Redirect>
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

      <Link to="/friend/third">朋友3</Link>
      <Switch>
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

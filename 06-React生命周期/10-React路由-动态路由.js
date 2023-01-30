import React from 'react';

/*
  学习目标：动态路由使用，以及获取参数
*/

import { Route, Link, BrowserRouter as Router, NavLink, Switch, Redirect } from 'react-router-dom';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>app组件</h1>
          <Header></Header>
          <NavLink to="/home" activeClassName="my-active" exact>
            跳到首页
          </NavLink>
          <br />
          <Link to="/my">跳到我的音乐</Link>
          <br />
          <Link to="/friend">跳到朋友</Link>

          <Switch>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="/friend" component={Friend} exact></Route>
            {/* 1. 设置动态路由 */}
            <Route path="/home/:xxx" component={Home}></Route>
            <Route path="/my" component={MyMusic}></Route>
            <Route path="/home" component={Home}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Header(props) {
  console.log('props  ----->  ', props);

  return <h3>我是Header我没有设置过Route匹配规则</h3>;
}

function Home(props) {
  console.log('props  ----->  ', props);
  // 2. 通过props.match.params去取值
  console.log('props.match  ----->  ', props.match.params.xxx);
  return (
    <div>
      <h1>我是首页组件</h1>
      <button
        onClick={() => {
          // props.history.push('/my');
          // props.history.go(-1); // -1 表示回退一个历史记录 +1表示前进1个路径
          props.history.goBack(); //等价于go(-1)
        }}
      >
        点我调到我的音乐路径 - {props.match.params.xxx}
      </button>
    </div>
  );
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

function MyMusic() {
  return <h1>我是我的音乐件</h1>;
}

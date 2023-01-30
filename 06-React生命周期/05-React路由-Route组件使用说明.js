import React from 'react';

/*
  学习目标：Route组件的使用说明
*/

import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
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
          {/* 1. Route组件匹配顺序从上往下匹配，匹配到第一个后，不会停止继续向下匹配 💥和VUe不同 */}

          {/* 2. 匹配任意路径的两种写法 */}
          {/* 2.1 path="/" /可以和任意的路径，模糊匹配成功 ，类似vue中的通配符 *  */}
          {/* <Route path="/" component={MyMusic} exact></Route> */}

          {/* 2.1 不写path  */}
          <Route path="/" component={MyMusic}></Route>

          {/* 3.1 Route组件也可以设置精准匹配， 写上exact */}
          {/* 3.2 💥不写path，设置exact无效 */}

          {/* <Route path="/" component={MyMusic} exact></Route> */}

          {/* 4. 如果 path 没有匹配上，那么会Route 会渲染一个 null */}
          <Route component={Friend} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
        </div>
        <Route path="/friend" component={Friend}></Route>
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

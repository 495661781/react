/*
  学习目标：使用React的知识，模拟路由的实现
  需求：路由变化时，显示对应的组件
*/
import React from 'react';

export default class App extends React.Component {
  // 1. 声明一个状态，保存对应的路径, 准备驱动视图
  state = {
    // 当前url的路径
    current: '/home',
  };

  // 3. 监听url路径的变化，
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      console.log('window.location.hash  ----->  ', window.location.hash);
      // 4. 根据url路径跟state的值，驱动视图变化
      this.setState({ current: window.location.hash.slice(1) });
    });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <h1>app组件</h1>
        <ul>
          <li>
            <a href="#/home">首页</a>
          </li>
          <li>
            <a href="#/my">我的音乐</a>
          </li>
          <li>
            <a href="#/friend">我的朋友</a>
          </li>
        </ul>
        {/* 2. 根据路径，做条件渲染 */}
        {current === '/home' && <Home></Home>}
        {current === '/my' && <MyMusic></MyMusic>}
        {current === '/friend' && <Friend></Friend>}
      </div>
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

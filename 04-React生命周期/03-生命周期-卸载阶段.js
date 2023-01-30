/*
  学习目标：生命周期-卸载阶段
*/

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    const { isShow } = this.state;
    return (
      <div>
        {isShow && <Child></Child>}
        <button
          onClick={() => {
            this.setState({ isShow: !isShow });
          }}
        >
          点我卸载子组件
        </button>
      </div>
    );
  }
}

// 目标：挂载时开启定时器
// 卸载时清除定时器
class Child extends React.Component {
  timerId = null;

  // 1. 挂载后开启定时器
  componentDidMount() {
    this.timerId = setInterval((params) => {
      console.log('定时器在执行  ----->  ');
    }, 100);
  }

  // 代表：💥卸载前，类似Vue中 beforeDestroy
  // 场景： 💥做清除的动作，比如：销毁定时器、取消监听的事件等
  componentWillUnmount() {
    console.log('我要被卸载掉了，  ----->  ');

    clearInterval(this.timerId);
  }
  render() {
    return <h1>我是Child - </h1>;
  }
}

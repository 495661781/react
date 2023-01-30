/*
  学习目标：生命周期-更新时
    1. render
    2. componentDidUpdate：
      代表：更新后，等同于Vue中的updated
      场景：做本地缓存，获取更新后的DOM

  注意：
      1. React中的更新指的是数据更新，而不是DOM更新
      2. Vue中的更新指的是DOM更新，而不是数据更新
      3.💥 更新阶段的钩子函数中，不能调用setState，会造成死循环

  触发组件更新阶段的方式有两种
     1. state改变
     2. props改变

*/

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Child msg="12312"></Child>
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    count: 100,
  };

  // 作用：更新虚拟DOM到真实DOM中
  render() {
    console.log('我是render钩子函数  ----->  ');
    // console.log('this.state.count  ----->  ', this.state.count);
    return (
      <div>
        <h1>我是Child - </h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 100 });
          }}
        >
          点我改变state
        </button>
      </div>
    );
  }

  // 代表：更新后的钩子函数 ，类比 vue中 updated
  // 场景：做本地缓存
  componentDidUpdate() {
    console.log('我是更新后的钩子函数 componentDidUpdate ----->  ');
    // console.log('this.state.count  ----->  ', this.state.count);
  }
}

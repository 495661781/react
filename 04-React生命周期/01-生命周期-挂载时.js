/*
  学习目标：生命周期-挂载时（创建阶段）

*/

import React, { Component } from 'react';

export default class App extends Component {
  // 1. constructor   -
  // 本质：组件的创建时 对标 - created
  // 作用: 早期 声明state 和ref
  // 场景：声明state 和ref（早期）

  // con
  constructor() {
    // 💥必须调用super ，super表示继承父级的所有属性和方法
    super();
    this.state = {};
    this.ref = React.createRef();
  }

  // 2. render - 渲染界面
  // 作用：负责渲染DOM
  render() {
    console.log('render被触发了  ----->  ');
    return <div>{this.state.count}</div>;
  }

  // 3. componentDidMount  -
  // 作用： 挂载后触发一个钩子函数， 对标vue中的mounted
  // 场景： 💥发请求、 最新获取dom元素
  componentDidMount() {
    console.log('App被挂载了  ----->  ');
    console.log('document.qu  ----->  ', document.querySelector('div'));
  }

  // 💥
  // 1.执行顺序： con => render => cdm
  // 2. 使用场景
  //   2.1 cdm 挂载后发请求，和vue不一样。 原因：为了避免白屏
  //   2.2 最先能够获取真实的DOM元素
}

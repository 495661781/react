/*
  学习目标：了解Context注意事项、优缺点、使用场景
 
*/

import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();
const { Provider: Provider2, Consumer: Consumer2 } = React.createContext();

// 注意事项：
// 1. createContext()可以调用多次，创建多个context, 可以解构多对的Provider和Consumer
// 2. Provider 和 Consumer ，必须成对使用

// 优缺点：
// 1. 优点：context是React自带的跨组件通信方式
// 2. 缺点：增加组件的嵌套结构

// 使用场景：
// 1. 多语言切换
// 2. 一键换色
// 3. 开源的第三方的包 - 体积要小

export default class App extends React.Component {
  render() {
    return (
      <Provider value="hello React">
        <div>
          <h1>父组件</h1>
          <Son></Son>
        </div>
      </Provider>
    );
  }
}

class Son extends Component {
  render() {
    return (
      <Provider2 value={888}>
        <div>
          <h2> 儿子</h2>
          <SonSon></SonSon>
        </div>
      </Provider2>
    );
  }
}

class SonSon extends Component {
  render() {
    return (
      <div>
        <h2> 孙子</h2>
        <Consumer>
          {(value) => {
            return <h1>{value}</h1>;
          }}
        </Consumer>
        <SonSonSon></SonSonSon>
      </div>
    );
  }
}

class SonSonSon extends React.Component {
  render() {
    return (
      <div>
        <Consumer2>
          {(value) => {
            return <i>{value}</i>;
          }}
        </Consumer2>
      </div>
    );
  }
}

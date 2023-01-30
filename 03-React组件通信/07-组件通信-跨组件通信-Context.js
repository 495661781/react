/* 
  目标： 使用Context来跨组价通信，让App组件-直接传数据给SonSon组件
*/

import React, { Component } from 'react';
// 1. 创建context ，提供一个存数据、取数据的环境
// 得到两个组件：Provider存数据 、 Consumer取数据用
const { Provider, Consumer } = React.createContext();

export default class App extends React.Component {
  render() {
    // 2. Provider组件存数据，通过value属性存数据- 传值
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
      <div>
        <h2> 儿子</h2>
        <SonSon></SonSon>
      </div>
    );
  }
}

class SonSon extends Component {
  render() {
    return (
      <div>
        <h2> 孙子</h2>
        {/* 3. 通过Consumer组件，取数据 -接收*/}
        {/* 语法：Consumer接收一个函数，函数的形参就是传来的数据，函数需要返回一段JSX  */}
        <Consumer>
          {(value) => {
            return <h1>{value}</h1>;
          }}
        </Consumer>
      </div>
    );
  }
}

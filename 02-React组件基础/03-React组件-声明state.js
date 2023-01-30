/**
 * 学习目标：使用类组件-声明状态，访问状态
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // 1. 声明状态
  // 注意：
  // 💥1. state = {} 是固定写法，对象的键表示声明的数据
  // 2. 对象可以写多个键，表示多个数据变量
  state = {
    msg: 'Hello React',
    count: 100,
  };

  render() {
    // this指向组件实例对象
    console.log('this  ----->  ', this.state.msg);
    // 💥 通过this.state.xxx访问数据变量
    return (
      <div>
        <h1>我是App {this.state.msg}</h1>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

const divNode = (
  <>
    <App></App>
  </>
);

ReactDOM.render(divNode, document.getElementById('root'));

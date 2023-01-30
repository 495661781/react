/*
  学习目标：掌握props传递数据
*/

// rcc
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 1. 传数据 - 通过标签的属性去传值 */}
        <Hello title="123" age={20}></Hello>
        <Child2 title="123" name="hello 72"></Child2>
      </div>
    );
  }
}

// 注意：
// 1.  props不必先定义后使用
// 2👍 推荐解构props对象
function Hello({ title, age }) {
  // 2. 函数组件：通过形参接收props对象
  return (
    <h1>
      我是Hello组件 - {title} - {age}{' '}
    </h1>
  );
}

class Child2 extends React.Component {
  render() {
    // 2. 类组件：通过this.props接收props对象
    const { title, name } = this.props;
    return (
      <div>
        <h2>我是类组件，我希望接收props传来的数据</h2>
        <i>
          {title} - {name}
        </i>
      </div>
    );
  }
}

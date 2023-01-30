import React, { Component } from 'react';

/*
  学习目标：chilren属性模拟-作用域插槽
  作用域插槽特点：
    1. 父组件可以使用子组件的数据，
    2. 并且控制子组件的渲染方式
*/

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          {/* 3. 父组件，通过形参接收到子组件传来的数据 */}
          {(data) => {
            // 4. 自定义返回的JSX，决定渲染什么内容
            return data.map((item) => <p>{item}</p>);
          }}
        </Child>
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    list: [1, 2, 3],
  };
  render() {
    // 1. 利用children是一个函数
    const { children } = this.props;
    // 2. 调用children函数
    return <div> {children(this.state.list)}</div>;
  }
}

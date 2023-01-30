import React, { Component } from 'react';

/*
  学习目标：setState的第二种写法- setState不覆盖前面的内容
  1. setState( (旧的state) => 新的state )
  2. 第二种写法，仍旧是异步的
  合并： 后面的setState不会覆盖前面的setState
*/

export default class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      };
    });

    this.setState((preState) => {
      return {
        count: preState.count + 2,
      };
    });

    this.setState((preState) => {
      return {
        count: preState.count + 3,
      };
    });
    console.log('this.state.count  ----->  ', this.state.count);
  };
  render() {
    const { count } = this.state;
    console.log('render 被执行了  ----->  ');
    return (
      <div>
        <h1>猜猜count的值{count}</h1>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

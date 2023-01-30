import React, { Component } from 'react';

/*
  学习目标：setState
   1. setState是异步的，react中state的更新是异步的
   2. 连续调用setState时，会触发合并：最后一个setState覆盖前面的
*/

export default class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    console.log('this.state.count  ----->  ', this.state.count);
    this.setState({ count: this.state.count + 1 });

    this.setState({ count: this.state.count + 2 });

    this.setState({ count: this.state.count + 3 });
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

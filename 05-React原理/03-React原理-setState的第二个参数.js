import React, { Component } from 'react';

/*
  学习目标：setState的第二个参数
  语法： setState({}, () => { 回调函数内，可以访问更新后的状态})
  缺点：1.会造成回调地域。 2.会造成render多次执行浪费性能
*/

export default class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    // +1
    // +2
    // +3
    this.setState({ count: this.state.count + 1 }, () => {
      // 回调函数内，可以访问更新后的值

      this.setState({ count: this.state.count + 2 }, () => {
        this.setState({ count: this.state.count + 3 });
      });
    });
  };
  render() {
    const { count } = this.state;
    console.log('render执行了  ----->  ');
    return (
      <div>
        <h1>猜猜count的值{count}</h1>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

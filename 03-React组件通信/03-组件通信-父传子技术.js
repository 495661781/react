/*
  学习目标：父传子技术
*/

import React from 'react';

export default class Parent extends React.Component {
  state = {
    money: 1000,
  };

  handleMakeMoney = () => {
    this.setState({
      money: 1000 + this.state.money,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMakeMoney}>爸爸开始赚钱了</button>
        {/* 1. 通过props传数据 */}
        <Child money={this.state.money}></Child>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    // 2. 子组件，通过props去接收数据
    const { money } = this.props;
    return (
      <div>
        <h1>家庭存款： {money}</h1>
      </div>
    );
  }
}

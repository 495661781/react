import React, { Component } from 'react';
import Husband from './components/Husband';
import Wife from './components/Wife';

/*
  学习目标：组件通信-兄弟组件通信
  原理： 状态提升
*/

export default class App extends Component {
  //1. 状态提升到父组件
  state = {
    money: 0,
  };

  // 3. 原本的赚钱方法，改造为子传父通信去赚钱
  handleMakeMoney = () => {
    this.setState({ money: this.state.money + 1000 });
  };

  // 4. 通过子传父技术，让Wife组件能够花钱
  handleCost = (num) => {
    this.setState({ money: this.state.money - num });
  };

  render() {
    const { money } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>家庭存款：</h1>
        {/* 2. 父传子给Husband组件 */}
        <Husband money={money} handleMakeMoney={this.handleMakeMoney}></Husband>
        <hr />
        <Wife handleCost={this.handleCost}></Wife>
      </div>
    );
  }
}

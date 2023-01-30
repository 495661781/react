import React from 'react';
/*
  学习目标：组件通讯-子传父技术
  关键点：props可以传函数
  步骤：
     1. 
     2. 
     3. 
*/
export default class Parent extends React.Component {
  state = {
    money: 1000,
  };

  handleMakeMoney = () => {
    this.setState({
      money: 1000 + this.state.money,
    });
  };

  // 1. 父组件中，定义一个函数
  handleCost = (num) => {
    console.log('num  ----->  ', num);
    this.setState({
      money: this.state.money - num,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMakeMoney}>爸爸开始赚钱了</button>
        <Child
          money={this.state.money}
          // 2. 💥通过porps传递函数给子组件
          handleCost={this.handleCost}
        ></Child>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    // 3. 解构出父组件
    const { money, handleCost } = this.props;
    return (
      <div>
        <h1>爸爸给我钱了： {money}</h1>
        <button
          // 4. 💥子组件调用父组件传来的函数，可以传参
          onClick={() => handleCost(5000)}
        >
          吞金兽想花钱
        </button>
      </div>
    );
  }
}

import React from 'react';

/*
  学习目标：React中组件的更新机制
  1. React中父组件更新时，后代组件默认全部更新
  2. React中组件更新，不会导致兄弟组件更新
 
*/
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Footer></Footer>
        <Footer2></Footer2>
      </div>
    );
  }
}

class Footer extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>数量： {this.state.count}</h1>
        <button onClick={this.handleClick}>点我修改数量</button>
      </div>
    );
  }
}

class Footer2 extends React.Component {
  render() {
    console.log('Footer2不需要更新  ----->  ');
    return <div>我是Footer2，我是Footer的兄弟组件</div>;
  }
}

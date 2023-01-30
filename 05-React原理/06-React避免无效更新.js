import React from 'react';

// React中性能优化原则：
// 1. 功能第一
// 2. 性能优化

// 1. 减轻state的设计：不需要渲染到界面的数据，不要放到state中
// 2. 避免无效的更新

export default class App extends React.Component {
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
        <Footer></Footer>
      </div>
    );
  }
}

// 目标：通过shouldComponentUpdate 阻止Footer无效更新
class Footer extends React.Component {
  // 控制组件更新的钩子函数，通过返回值，控制组件是否更新
  shouldComponentUpdate() {
    // 🔔返回true表示更新组件
    // return true;

    // 🔔返回false表示不更新组件
    return false;
  }

  render() {
    console.log('我是Foter，我被更新了  ----->  ');
    return <div>我是Footer</div>;
  }
}

// React中的优化原则：
// 1. 功能第一

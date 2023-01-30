import React from 'react';

/*
  学习目标：使用PureComponent浅比较，可能造成的问题
*/
export default class App extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 🔔PureCompnent在源码内部，比较的是引用地址：
    console.log('  ----->  ', nextState.list === this.state.list);
  }

  state = {
    list: [1, 2, 3, 4],
  };

  handleClick = () => {
    this.state.list.push(5);
    this.setState(this.state); // 💥这种写法会导致list的引用地址一直没有改变

    // 🔔在使用setState时遵循新值覆盖旧值
    // const newList = [...this.state.list, 5];
    // this.setState({ list: newList });
  };

  render() {
    console.log('render被重新渲染了，组件更新了  ----->  ');
    return (
      <div>
        <h2>{this.state.list}</h2>
        <button onClick={this.handleClick}>点我修改list</button>
      </div>
    );
  }
}

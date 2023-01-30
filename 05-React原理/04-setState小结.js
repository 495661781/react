import React, { Component } from 'react';

/*
  学习目标：setState小结
  1. setState({更新的键：新值})
    场景： 不需要立马获取更新后的值。 正常使用即可
  2. 👍setState((旧的state) => 新的state )
    场景： 需要立马获取到更新后的值
    优点： setState会在源码内部合并，减少render执行次数
  3. 👎setState(更新的对象，回调函数)
    场景： 需要立马获取到更新后的值
    这是早期的写法： 
      3.1 会造成回调函数嵌套，增加理解
      3.2 无法减少render的执行次数，浪费性能
*/

export default class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>猜猜count的值{count}</h1>
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}

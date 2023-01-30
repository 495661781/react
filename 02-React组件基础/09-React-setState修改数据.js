/**
 * 学习目标：声明state状态count，并且通过点击事件，修改count
 */
import React from 'react';
import ReactDOM from 'react-dom';

// setState
// 作用：修改state，驱动视图自动变化
// 语法： this.setState({更新的数据变量：新值})

class App extends React.Component {
  // 💥不可变数据 - react中不能对state直接修改，一定要通过setState修改
  state = {
    count: 100,
    msg: '123',
    list: [1, 2, 3],
  };

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <h2> {this.state.msg}</h2>
        <h2> {this.state.list}</h2>
        <button onClick={this.handleClick}>点我修改count和msg</button>
      </div>
    );
  }

  handleClick = () => {
    // ✅ 正确写法
    // this.setState({ msg: 'Hello React', count: 200 });

    // 常见的错误写法
    // 1. ❌直接修改数据
    // this.state.count = 200;
    // this.state.count += 200;

    // 2. ❌ 修改了数据，再调用setState，不规范
    // this.setState({
    //   count: (this.state.count += 200),
    // });

    // 3.❌ 所有会改变原始数据的方法都不能用，无效
    this.state.list.push(4);
  };
}

ReactDOM.render(<App></App>, document.getElementById('root'));

/**
 * 学习目标：购物车练习
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <p>当前数值为：{this.state.count}</p>
        <hr />
        {/* 3. 通过传参，复用同一个事件处理方法 */}
        <button onClick={() => this.handleClick(1)}>+1</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleClick(-1)}>-1</button>
      </div>
    );
  }

  // 1. 绑定事件处理方法 💥 注意this问题
  handleClick(num) {
    console.log('this  ----->  ', this);
    // cs 解构快捷键
    const { count } = this.state;
    // 2. setState修改数据
    // sst setState快捷键
    this.setState({ count: count + num });
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

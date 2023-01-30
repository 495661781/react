/**
 * 学习目标：准备button按钮，点击时给事件传值
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 口诀： 加个箭头，变成箭头函数 */}
        {/* 2. 传值 */}
        <button onClick={(e) => this.handleClick(123, e, '123')}>点我传值</button>
      </div>
    );
  }

  // 1. 事件方法的形参中，自定义要接收的形参
  handleClick(num, str, e) {
    console.log('e  ----->  ', e);
    console.log('num  ----->  ', num);
    console.log('str  ----->  ', str);
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

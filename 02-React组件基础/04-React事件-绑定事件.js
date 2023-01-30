/**
 * 学习目标：准备button按钮，给button绑定一个click事件
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    console.log('this  ----->  ', this.handleClick);
    return (
      <div>
        <button
          // 👍 1. 少量代码，使用箭头函数
          // onClick={() => alert(123)}

          // 👍2. 多行代码的使用， 自定义一个函数，通过this.xxxx去调用这个函数
          onClick={this.handleClick}

          // 💥常见的错误写法
          // 1. 事件绑定的是一个函数，而不是一个函数的调用
          // onClick={alert(123)}

          // 2. 不要在这里使用functon去声明函数绑定
          // onClick={function () {
          //   alert(123);
          // }}
        >
          点我
        </button>
      </div>
    );
  }

  handleClick() {
    console.log('123  ----->  ', 123);
    console.log('123  ----->  ', 123);
    console.log('123  ----->  ', 123);
    console.log('123  ----->  ', 123);
    console.log('123  ----->  ', 123);
    alert('Hello React');
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

/**
 * 学习目标：
 *  1. 知道react中this指向存在的问题
 *  2. 知道修复的方式
 *    原理： 借助箭头函数本身没有this，箭头函数的this会指向箭头函数所在环境
 *    2.1 在React自带结构体（render）中，使用箭头函数，绑定事件
 *    2. 声明方法时，使用箭头函数声明方法
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };

  // 问题：🔔React自带结构体中（比如render），this被react源码处理过，this指向组件实例对象
  render() {
    return (
      <div>
        <button
          //解决办法1： 在render中使用箭头函数，绑定事件
          onClick={() => this.handleXxxx()}
        >
          点我传值
        </button>
        <button onClick={this.handleXxxx}>点我传值</button>
      </div>
    );
  }

  // 问题：🔔非自带结构体，this默认指向undefined
  // 解决办法2. 使用箭头函数，定义事件处理方法
  handleXxxx = () => {
    // undefined.state.count
    console.log('this  ----->  ', this);
  };
}

ReactDOM.render(<App></App>, document.getElementById('root'));

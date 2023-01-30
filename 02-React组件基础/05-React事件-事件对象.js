/**
 * 学习目标：准备一个a标签，阻止a标签的默认行为
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 🔔 绑定函数的默认形参，就是事件对象，类似vue
class App extends React.Component {
  render() {
    return (
      <div>
        <a
          href="http://www.baidu.com"
          // 1. 单行代码，简写写法
          // onClick={(e) => e.preventDefault()}
          // 2. 多行代码，handleClick的形参默认就是事件对象
          onClick={this.handleClick}
        >
          点我调到百度
        </a>
      </div>
    );
  }

  handleClick(e) {
    console.log('e  ----->  ', e);
    e.preventDefault();
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

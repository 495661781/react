/**
 * 学习目标：React组件-类组件
 */
import React from 'react';
import ReactDOM from 'react-dom';

// class 和 extends是关键字，要写死
// React.Component 代表的继承 React的组件，要写死

// 类组件和函数式组件的注意事项，一样
// 1. 组件的名字还是首字母大写
class Hello extends React.Component {
  // render是一个钩子函数，会自动执行。 负责渲染html结构
  // 💥注意：render函数必须返回一个段JSX，如果不需要显示任何内容，返回null
  render() {
    return <h1>123</h1>;
  }
}

const divNode = (
  <div>
    <Hello></Hello>
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

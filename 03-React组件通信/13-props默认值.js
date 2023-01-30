import React from 'react';

/*
  学习目标：使用props-type指定默认值
*/

export default function App() {
  return (
    <div>
      <Child></Child>
      <Child title="我是传来的title"></Child>
      <Child2></Child2>
    </div>
  );
}

// 3. 💥函数组件指定默认值, 最新写法
function Child({ title = '我是默认的title' }) {
  console.log('title  ----->  ', title);
  return <div>我是Child组件 - {title}</div>;
}

// 1. 早期函数式组件，指定props默认值
// Child.defaultProps = {
//   title: '我是默认的title',
// };

// 2. 早期类组件指定，指定props默认值
class Child2 extends React.Component {
  render() {
    return <div>{this.props.age}</div>;
  }
}

Child2.defaultProps = {
  age: 18,
};

import React from 'react';

/*
  学习目标：使用static设置静态成员propTypes属性
*/

import PropTypes from 'prop-types';

export default function App() {
  return (
    <div>
      <Child age="123123231"></Child>
    </div>
  );
}

class Child extends React.Component {
  render() {
    return <div>我是Child组件</div>;
  }

  static propTypes = {
    age: PropTypes.number,
  };
}

// Child.propTypes = {
//   age: PropTypes.number,
// };

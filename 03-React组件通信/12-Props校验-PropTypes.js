import React from 'react';

/*
  学习目标：使用prop-types给组件加上props类型校验
*/
// 1. 导入类型包
import PropTypes from 'prop-types';

export default function App() {
  return (
    <div>
      {/* 3. 验证 */}
      <Child age={123}></Child>
      {/* <Child list={[1, 2, 3]}></Child> */}
      {/* <Child content={<div>123</div>}></Child> */}
      <Child zs={{ gender: '456', xxx: '1231' }}></Child>
    </div>
  );
}

class Child extends React.Component {
  render() {
    return <div>我是Child组件</div>;
  }

  static propTypes = {
    // title: PropTypes.string.isRequired,
    age: PropTypes.number,
    list: PropTypes.array,
    // JSX
    content: PropTypes.element,

    zs: PropTypes.shape({
      // 💥 shape只校验定义了的类型，不校验没定义的类型
      name: PropTypes.string,
      gender: PropTypes.string,
    }),
  };
}

// 2. 给组件设置props属性的类型
// Child.propTypes = {
//   // title: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   list: PropTypes.array,
//   // JSX
//   content: PropTypes.element,

//   zs: PropTypes.shape({
//     // 💥 shape只校验定义了的类型，不校验没定义的类型
//     name: PropTypes.string,
//     gender: PropTypes.string,
//   }),
// };

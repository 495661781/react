/**
 * 学习目标： 创建使用React组件 - 函数式组件
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 注意事项：创建上：💥
// 1. 函数组件的名字，首字母要大写
// 2. 必须返回一段JSX，如果不需要显示任何内容，返回null
function Hello() {
  return null;
}

// 注意事项：使用上💥
// 1. React对大小写敏感，组件的创建和使用，都要大写开头。不同于Vue

// 变种写法：
const Hello2 = () => {
  return <h1>我是Hello2 箭头函数组件</h1>;
};

const Hello3 = () => <h1>我是Hello3 箭头函数组件 省略return</h1>;

function hello() {
  return <h1>小写hello</h1>;
}

const divNode = (
  <div>
    <Hello></Hello>
    <Hello2></Hello2>
    <Hello3></Hello3>
    {/* 上方都是函数式组件 */}

    {/* 这是JSX插值调用函数，不是组件 */}
    {hello()}
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

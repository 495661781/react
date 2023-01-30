/**
 * 学习目标：JSX中的插值表达式 - 引用类型
 * 作用：类似vue中的插值表达式，
 * 引用类型： 对象、数组
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 1. 对象
const person = {
  type: 'zs',
  age: 18,
  children: {},
};

// 2. 数组
const list = [1, 2, 3];
const divNode = (
  <div>
    {/* 💥 对象不能直接放在JSX的插值表达式中 */}
    <div>{person}</div>
    {/* 🔔 数组中的每项元素会当做一个DOM节点渲染出来 */}
    <div>{list}</div>
    <h2>123</h2>
  </div>
);

console.log('divNode  ----->  ', divNode);

ReactDOM.render(divNode, document.getElementById('root'));

/*
  学习目标：JSX初体验
*/

import React from 'react';
import ReactDOM from 'react-dom';

const liNode1 = React.createElement('li', null, '香蕉');
const liNode2 = React.createElement('li', null, '橘子');
const liNode3 = React.createElement('li', null, '苹果');
const ulNode1 = React.createElement('ul', { className: 'list' }, liNode1, liNode2, liNode3);

// JSX的语法：允许在js文件中，写html的标签代码
// JSX是createElement的语法糖，创建的还是React元素-虚拟DOM
const ulNode2 = (
  <ul className="list">
    <li>香蕉123</li>
    <li>橘子123</li>
    <li>苹果123</li>
  </ul>
);

console.log('ulNode1, ulNode2  ----->  ', ulNode1, ulNode2);

ReactDOM.render(ulNode2, document.getElementById('root'));

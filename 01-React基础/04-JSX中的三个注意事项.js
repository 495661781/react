/*
  学习目标：JSX三个注意事项
*/

import React from 'react';
import ReactDOM from 'react-dom';

const liNode1 = React.createElement('li', null, '香蕉');
const liNode2 = React.createElement('li', null, '橘子');
const liNode3 = React.createElement('li', null, '苹果');
const ulNode1 = React.createElement('ul', { className: 'list' }, liNode1, liNode2, liNode3);

// 1. JSX中的元素必须有一个根标签，如果不需要根标签，👍 推荐使用<></> <React.Fragment></React.Fragment>
// 2. 所有的dom元素，必须有关闭标记符号
// 3. 关键字冲突
//  3.1 class  => className
//  3.2 for  =>  htmlFor

const ulNode2 = (
  <>
    <ul className="list">
      <li>香蕉123</li>
      <li>橘子123</li>
      <li>苹果123</li>
    </ul>
    <ul className="list">
      <li>香蕉123</li>
      <li>橘子123</li>
      <li>苹果123</li>

      <input type="text" id="ipt" />
      <label htmlFor="ipt">点我就相当于点了input，会聚焦</label>
    </ul>
  </>
);

console.log('ulNode1, ulNode2  ----->  ', ulNode1, ulNode2);

ReactDOM.render(ulNode2, document.getElementById('root'));

/**
 * 学习目标：React中的列表渲染 - 数组数组
 */

//  列表渲染 - 数组渲染
// 数组内的每个元素，都会被渲染到DOM中

// key作用：和vue中key的作用，一模一样
// key口诀：🔔有id用id，没id用索引
// key：🔔是唯一的字符串或数字都可以

import React from 'react';
import ReactDOM from 'react-dom';

const list1 = ['React', 'Vue', 'TS'];
const list2 = [<h1>React</h1>, <h1>Vue</h1>, <h1>TS</h1>];

const list3 = ['React1', 'Vue2', 'TS3'].map((item) => {
  return <h1>{item}</h1>;
});

const divNode = (
  <div>
    {list1.map((item, index) => {
      return <h1 key={index}>{item}</h1>;
    })}

    {list2}

    {list3}
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

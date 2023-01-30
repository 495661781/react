/*
  学习目标：React中的样式处理-行内样式
  语法：style = { {css属性名： 属性值} } 
  注意：
    1. 💥第一个花括号代表的是插值符号, 第二个花括号代表：style接收的是一个css属性组成的对象
    2. 💥React中遇到连字符，转成驼峰式写法
    3. 💥单位px可以省略
*/

import React from 'react';
import ReactDOM from 'react-dom';

const divNode = (
  <div>
    <h1 style={{ color: 'pink', fontSize: 50 }}>Hello React</h1>
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

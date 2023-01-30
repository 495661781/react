/**
 * 学习目标：JSX中的插值表达式
 * 作用：类似vue中的插值表达式，
 * 变量
 * 基本类型： 字符串 数字 null boolean undefined
 * 引用类型： 数组、对象 函数
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'hello 72';

const divNode = (
  <div>
    {/* 变量 */}
    <h1>{title}</h1>
    {/* 字符串 */}
    <h1>{'Hello React'}</h1>
    <h1>{72}</h1>

    {/* 💥 null boolean undefined  不会显示在界面上*/}
    <h2>
      {null} - {String(null)}
    </h2>
    <h2>
      {false} - {String(false)}
    </h2>
    <h2>{undefined}</h2>
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

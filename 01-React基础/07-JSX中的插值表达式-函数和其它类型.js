/**
 * 学习目标：JSX中的插值表达式 - 函数和其它
 * 作用：类似vue中的插值表达式，
 * 引用类型： 函数
 * 其它的表达式： 三元运算符、 逻辑运算符 JSX本身
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';

const isShow = true;

// 🔔函数
function hello() {
  return 'Hello React';
}

const ulNode = (
  <ul>
    <li>123</li>
  </ul>
);

const divNode = (
  <div>
    {/* 💥在JS中函数也属于对象类型的一种，函数本身不能直接放在插值表达式中 */}
    <h1>{hello()}</h1>

    {/* ✅三元 */}
    {true ? 'Hello React' : 'Hello Vue'}
    {/* ✅逻辑运算 */}
    {isShow && 'Hello 72'}
    {/* ✅JSX本身也是表达式 */}
    {<b>123</b>}
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

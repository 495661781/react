/**
 * 学习目标：React中的JSX - 小结
 *
 * JSX是什么？
 * 大白话：允许在JS中书写html的代码
 *
 * JSX中的插值表达式
 * 语法： {}
 *
 * 支持的表达式
 * 1. 基本类型
 * 1.1 正常显示： string number
 * 1.2 不显示： 🔔null 、 undefined、 boolean
 * 2. 引用类型
 * 2.1 对象：💥 不能在插值表达式中，直接放入对象
 * 2.2 数组：🔔 数组内的每项元素，会被变成渲染成一个个的DOM节点
 * 3. 特殊类型
 * 3.1 函数：🔔本身也属于对象类型。通常函数的调用可以放在插值表达式
 * 3.2 逻辑运算符
 * 3.3 三元运算符
 * 3.4 JSX本身可以  🔔 通常和其它方式配合使用，不单独放在{}中
 *
 * 三种条件渲染： 类似v-if，通过移除dom控制隐藏
 * 1. if / else语句  🔔 通常要和function配合使用
 * 2. 三元
 * 3. 逻辑运算符
 *
 * 列表渲染-数组渲染
 *  数组内的每项元素，会被变成渲染成一个个的DOM节点
 * 🔔 [].map()方式最便捷
 *
 * JSX中使用的三个注意事项
 * 1. 必须有一个共同的根标签. 👍 推荐使用<></>包住兄弟节点
 * 2. 标签必须有关闭标记
 * 3. 关键字冲突：
 *  3.1  class  =>  className
 *  3.2  for => htmlFor
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';

const divNode = (
  <>
    <ul>
      <li>123</li>
    </ul>
    <ul>
      <li>123</li>
    </ul>
    <input type="text" id="ipt" />
    <label for="ipt">点我</label>
  </>
);

ReactDOM.render(divNode, document.getElementById('root'));

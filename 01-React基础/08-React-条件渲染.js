/**
 * 学习目标：React中的条件渲染
 * 作用：控制元素是否显示， 类似v-if
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 需求:  正常显示   加载中...
const isLoading = true;

// 1. if else语句
// 往往配合函数去使用
function loadData() {
  if (isLoading) {
    return <h1>加载zhong</h1>;
  } else {
    return <h1>正常显示</h1>;
  }
}

const divNode = (
  <dvi>
    {loadData()}
    {/* // 2. 三元表达式 */}
    {isLoading ? <h1>加载zhong</h1> : <h1>正常显示</h1>}
    {/* 3. 逻辑运算符 */}
    {isLoading && <h1>加载中...</h1>}
    {!isLoading && <h1>正常显示</h1>}
  </dvi>
);

ReactDOM.render(divNode, document.getElementById('root'));

// 条件渲染方式：
// 1. if else语句配合函数
// 2. 三元
// 3. 逻辑

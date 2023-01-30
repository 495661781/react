/*
  学习目标：useEffect的基本使用
*/

// useEffect作用：处理React中的副作用
// React副作用：发请求、修改DOM、监听事件

// 1. 导入useEffect钩子函数
import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 2. 调用useEffect钩子函数
  // 语法： useEffect(回调函数)  🔔 回调函数会自动执行
  useEffect(() => {
    console.log('我是一个自动执行的钩子函数  ----->  ');
    document.title = count;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我修改html的title为connt的值
      </button>
    </div>
  );
}

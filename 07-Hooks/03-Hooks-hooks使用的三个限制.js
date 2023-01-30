/*
  学习目标：hooks使用的 三个限制
 
  
*/

import React, { useState } from 'react';

const isShow = true;
export default function App() {
  // React源码内部会记住更新后的值， 依靠useState调用顺序，保证更新后的值分配和变量

  // 第一个useState，新值： 1
  // 第二个useState，新值：：1001

  // 1. if esle语句中不能使用hooks
  if (false) {
    const [msg, setMsg] = useState(0);
  }

  const [count, setCount] = useState(1000);

  const list = [1, 3, 3];
  // 2. 不能在for语句中，使用hooks
  for (let index = 0; index < list.length; index++) {
    const [state, setstate] = useState(0);
    const element = list[index];
  }

  return (
    <div>
      <h1>我是App - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我修改count
      </button>
    </div>
  );
}

// React中的非普通函数：
// 3.1. 函数式组件
function Hello() {
  const [state, setstate] = useState(0);

  return <h1>123</h1>;
}
// 3.2. 自定义hooks: use开头的函数+ 驼峰式命名
function useXxxx() {
  const [state, setstate] = useState('121312');
}

// 3. 不能在普通函数中使用hooks
//普通函数：非函数式组件、非use开头的函数
function add() {
  const [state, setstate] = useState(100);
  return 1 + 1;
}

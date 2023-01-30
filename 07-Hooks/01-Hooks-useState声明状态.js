// 1. 从React中，导入useState
import React, { useState } from 'react';

/*
  学习目标：使用useState Hooks给函数组件声明count状态
  语法：const [数据变量， 更新状态的函数] = useState(状态的初始值)
  // setCount(新值)

*/

export default function App() {
  // 2. 调用useState
  // count等同于state.count  , setCount等同于  setState({count: 新值})

  // 3. 解构返回值，当做变量和回调函数使用
  // 💥 每次解构的变量和函数是一对一对的
  const [count, setCount] = useState(1000);

  const [msg, setMsg] = useState('Hello React');
  console.log('count  ----->  ', count);
  return (
    <div>
      <h1>我是App - {count}</h1>
      <h2>msg -{msg}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我修改count
      </button>
      <button
        onClick={() => {
          setMsg(msg + '~');
        }}
      >
        点我修改Msg
      </button>
    </div>
  );
}

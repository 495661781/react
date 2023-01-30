/*
  学习目标：useEffect监听多个状态的写法： count msg
*/

import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('hello React');

  // 1. 分开写
  useEffect(() => {
    console.log('count  ----->  ', count);
  }, [count]);

  useEffect(() => {
    console.log('msg  ----->  ', msg);
  }, [msg]);

  // 2. 同时监听多个依赖项
  useEffect(() => {
    console.log('msg, count  ----->  ', msg, count);
    localStorage.setItem('test-effect', count + msg);
    // 💥 数组内的依赖项可以写多个
  }, [count, msg]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{msg}</h1>
      <button onClick={() => setCount(count + 1)}>点我修改count</button>
      <button onClick={() => setMsg(msg + '~')}>点我修改msg</button>
    </div>
  );
}

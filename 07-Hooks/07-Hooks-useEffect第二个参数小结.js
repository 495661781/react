/*
  学习目标：对effect第二个参数用法-小结
*/

import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const [msg, setMsg] = useState('hello React');

  // 1. []
  // 作用：模拟componentDidMount挂载后的钩子函数
  // 场景：发请求、最新获取DOM、开启定时器、监听事件
  // useEffect(() => {
  //   console.log('我会执行一次  ----->  ');
  // }, []);

  // 👍2. [依赖性]
  // 作用：模拟componentDidMount挂载后 和 ComponentDidUpdate更新后的两个钩子函数，二合一
  // 场景：做缓存
  useEffect(() => {
    console.log('我会执行一次  ----->  ', count);
    // 💥只会监听依赖项变化，触发更新钩子函数，
  }, [count]);

  // 👎3. 不传
  // 💥会监听所有的状态变化，触发更新钩子函数， 容易造成页面卡顿
  // 作用：模拟componentDidMount挂载后 和 ComponentDidUpdate更新后的两个钩子函数，二合一
  // useEffect(() => {
  //   console.log('我是一个钩子函数, 会多次执行  ----->  ', count);
  // });

  return (
    <div>
      <h1>{count}</h1>
      <h1>{msg}</h1>
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
        点我修改msg
      </button>
    </div>
  );
}

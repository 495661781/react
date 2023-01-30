/*
  学习目标：使用useEffect的第二个参数，模拟生命周期
    1. 挂载后的钩子函数
    2. 更新后的生命周期
*/

import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 第二个参数：空数组[] 表示挂载后才会执行的钩子函数，相当于componentDidMount
  // useEffect(() => {
  //   console.log('我是挂载后的钩子函数，只会执行一次  ----->  ');
  // }, []);

  // 第二个参数：[依赖项]，表示挂载后和更新后执行，相当于componentDidMount和componentDidUpdate 两个钩子函数二合一
  // 类似Vue中watch，监听count，开启了immedialy
  useEffect(() => {
    console.log('我是一个钩子函数, 会多次执行  ----->  ', count);
  }, [count]);

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

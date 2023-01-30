/*
  学习目标：useEffect模拟-卸载时的声明周期
*/

import React, { useEffect, useState } from 'react';

export default function App() {
  // 准备组件的显示与隐藏
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      {isShow && <Child></Child>}
      <button onClick={() => setIsShow(!isShow)}>点击卸载子组件</button>
    </div>
  );
}

function Child() {
  // 1. 同时写挂载时和卸载时
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('定时器在跑  ----->  ');
    }, 100);

    // 返回的函数，就是组件卸载时自动执行的钩子函数
    return () => {
      clearInterval(timerId);
    };
  }, []);

  let timerId = -1;
  // 2. 分开写挂载时  和 卸载时
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerId = setInterval(() => {
      console.log('定时器在跑  ----->  ');
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 需求2： 卸载时关闭定时器

  return <div>我是子组件</div>;
}

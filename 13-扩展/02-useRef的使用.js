/*
  学习目标： 能够使用useRef创建ref
  useRef ：
    作用：创建ref
    不同：
      React.createRef() 用在类组件中
      useRef() 用在函数式组件中，创建ref
  ref的作用： 
      1. 获取dom元素、
      2. 获取组件实例对象 
      3. 💥 可以保存任意不需要渲染的数据
*/

import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  // 1. 调用useRef， 创建ref对象
  const h1Ref = useRef();

  const handleClick = () => {
    console.log('h1Ref.current  ----->  ', h1Ref.current);
  };

  const [isShow, setIsShow] = useState(true);

  // 3. 访问ref绑定的dom元素
  return (
    <div>
      <h1
        // 2. 通过ref绑定dom元素或者类组件
        ref={h1Ref}
      >
        我是h1标签
      </h1>

      {isShow && <Child />}

      <button onClick={handleClick}>点我获取h1标签</button>
    </div>
  );
}

// 需求： Child挂载后开启定时器、卸载关闭定时器
// 需求：用useEffect分开写

function Child() {
  // 1、 创建ref
  const timerIdRef = useRef();

  console.log(' timerIdRef ----->  ', timerIdRef);

  useEffect(() => {
    // 2. 自己给ref.current属性分配任意值进行保存
    timerIdRef.current = setInterval(() => {
      console.log('定时器开启了  ----->  ');
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      // 3. 通过ref.current访问保存的数据
      clearInterval(timerIdRef.current);
    };
  }, []);
  return <h2>我是CHild</h2>;
}

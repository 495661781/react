/*
  学习目标：组件逻辑复用的三种方式之一 - Render Props
  本质：通过props的render属性，决定如何渲染组件的内容

*/

import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      我是APP
      <Mouse
        // 1. props可以传递函数
        render={(mouse, handleMoseMove) => {
          // 类似vue中的作用域插槽, 可以自定义渲染的内容
          return (
            <h1 onMouseOver={handleMoseMove}>
              {mouse.x} - {mouse.y}
            </h1>
          );
        }}
      ></Mouse>
      <Mouse
        // 1. props可以传递函数
        render={(mouse, handleMoseMove) => {
          // 类似vue中的作用域插槽, 可以自定义渲染的内容
          return (
            <div onMouseOver={handleMoseMove}>
              <h2>{mouse.x}</h2>
              <h2>{mouse.y}</h2>
            </div>
          );
        }}
      ></Mouse>
    </div>
  );
}

function Mouse({ render }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMoseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return <>{render(mouse, handleMoseMove)}</>;
}

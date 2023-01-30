/*
  学习目标：Redux在React中的使用
  需求：使用Redux保存数据，并且组件卸载时不销毁count的值
  步骤：
     1. 创建store： src/store/index.js

*/

import { useEffect, useState } from 'react';
import store from './store';
export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Redux基础案例</h1>
      <button onClick={() => setShow(!show)}>点击切换卸载挂载</button>
      {show ? <Son /> : null}
    </div>
  );
}

function Son() {
  // 2. 从store中取出count， 作为初始值
  const [count, setCount] = useState(store.getState().count);
  // Redux💥不负责驱动视图，只负责管理数据：保存数据，计算数据。
  // React💥负责驱动视图

  useEffect(() => {
    const unFn = store.subscribe(() => {
      console.log('state变化了  ----->  ', store.getState().count);
      // 4. 监听数据变化，同步数据给React
      setCount(store.getState().count);
    });

    // 5. 卸载时关闭监听
    return () => {
      unFn();
    };
  }, []);

  return (
    <div>
      <h2>子组件</h2>
      <h2>count:{count}</h2>
      <button
        // 3. 点击事件在redux中修改count的值
        onClick={() => store.dispatch({ type: 'add' })}
      >
        +1
      </button>
      <button onClick={() => store.dispatch({ type: 'des' })}>-1</button>
    </div>
  );
}

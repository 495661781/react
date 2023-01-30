/*
  学习目标：使用react-redux连接库，简化redux在React中的使用
*/

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  // 2. 通过useSelector 获取state
  // 语法： useSelect(函数)
  // 注意：💥useSelector在源码内部处理了state.count的监听，并且同步给React，让Reacg驱动视图
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>子组件</h2>
      <h2>count:{count}</h2>
      <button
        // 3. 通过useDispatch，获取dispatch，触发dispatch
        onClick={() => dispatch({ type: 'add' })}
      >
        +1
      </button>
      <button onClick={() => dispatch({ type: 'des' })}>-1</button>
    </div>
  );
}

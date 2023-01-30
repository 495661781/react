/*
  学习目标：Action能够传参，实现+5 +1 -1 -10
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
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>子组件</h2>
      <h2>count:{count}</h2>
      {/* 1. Action对象中，使用payload传参； 👍推荐使用payload作为参数的键名 */}
      <button onClick={() => dispatch({ type: 'add', payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: 'add', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'des', payload: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'des', payload: 10 })}>-10</button>
    </div>
  );
}

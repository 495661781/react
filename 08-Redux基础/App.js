/*
  学习目标：使用actionCreator减少代码，增加代码提示
  步骤：
     1. 
     2. 
     3. 
*/

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, desAction } from './store';
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
      <button
        // 2. 调用函数创建action对象 💥记得要调用函数
        onClick={() => dispatch(addAction(1))}
      >
        +1
      </button>
      <button onClick={() => dispatch(addAction(5))}>+5</button>
      <button onClick={() => dispatch(desAction(1))}>-1</button>
      <button onClick={() => dispatch(desAction(10))}>-10</button>
    </div>
  );
}

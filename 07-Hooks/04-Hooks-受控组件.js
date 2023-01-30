/*
  学习目标：受控组件 - hooks
  受控组件：
    1. 表单元素的value或checked属性，由state控制
    2. onChange配合setState修改数据 
*/

import React, { useState } from 'react';

export default function App() {
  // 1. 声明state
  const [name, setName] = useState('Hello 72');
  return (
    <div>
      <input
        type="text"
        // 控制表单元素的value
        value={name}
        // 2. onChange 配合setState修改数据
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

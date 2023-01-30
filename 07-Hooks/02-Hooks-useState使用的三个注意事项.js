/*
  学习目标：使用useState的三个注意事项和一个规范问题
  步骤：
  
  
  */

import React, { useState } from 'react';

export default function App() {
  // 1. useState可以调用多次，声明多个状态
  let [count, setCount] = useState(1000);

  const [msg, setMsg] = useState('Hello React');
  // 2. useState可以声明任意数据类型
  const [person, setPerson] = useState({ name: 'zs', age: 18 });
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  // 命名规范 const [变量名，set+驼峰变量名] = useState(初始值)
  // 快捷键: useState
  const [name, setName] = useState('123123');

  return (
    <div>
      <h1>我是App - {count}</h1>
      <h2>msg -{msg}</h2>
      <h3>
        {person.name} -- {person.age}
      </h3>

      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          // 3. 更新state仍旧是新值覆盖旧值
          // count = count + 1;
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
        点我修改Msg
      </button>
    </div>
  );
}

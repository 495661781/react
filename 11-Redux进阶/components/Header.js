import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddAction } from '../store/action/todo';

export default function Header() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log('回车事件被触发了  ----->  ');
      dispatch(
        // 接收一个action对象
        AddAction({ id: Date.now(), task, isDone: false })
      );
      setTask('');
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        onKeyUp={handleKeyUp}
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="new-todo"
        placeholder="需要做什么"
        autoFocus
      />
    </header>
  );
}

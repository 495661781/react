/**
 *  学习目标：Todos 案例
 *  ✅需求1： 拆分为函数组件：3个子组件，Header Main Footer
 *  ✅需求2：声明数据，渲染任务列表
 *  ✅需求3：根据id，删除一条任务
 *  ✅需求4：根据id，更新一条任务的状态
 *  ✅需求5：清除已完成的任务
 *  ✅需求6：数据切换-点谁谁有边框
 *  ✅需求7：数据切换 ：🔔模拟计算属性
 *  ✅需求8：计算剩余的未完成任务数量，显示在界面
 *  ✅需求9： 新增功能
 *  ✅需求10： 全选功能：小选影响全选、全选影响小选
 *  ✅需求11： 缓存功能
 */
import React, { useEffect, useState } from 'react';
import './styles/base.css';
import './styles/index.css';

export default function App() {
  // 2. 从缓存中读取初始值, 并且处理可能为空的问题
  const [list, setList] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);
  const [type, setType] = useState(localStorage.getItem('todo-type') || 'all');

  // 1. 使用useEffect模拟更新后的生命周期钩子函数, 存数据到缓存中
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(list));
    localStorage.setItem('todo-type', type);
  }, [list, type]);

  const computedList = list.filter((item) => {
    if (type === 'completed') {
      return item.isDone;
    }

    if (type === 'active') {
      return !item.isDone;
    }

    return true;
  });

  const restLen = list.filter((item) => !item.isDone).length;
  const isAll = list.length ? list.every((item) => item.isDone) : false;

  const handleCheckAll = (checked) => {
    const newList = list.map((item) => ({ ...item, isDone: checked }));
    setList(newList);
  };

  const handleAdd = (task) => {
    setList([{ task, id: Date.now(), isDone: false }, ...list]);
  };

  const handleDelById = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleUpdateById = (id) => {
    const newList = list.map((item) => {
      return { ...item, isDone: item.id === id ? !item.isDone : item.isDone };
    });

    setList(newList);
  };

  const handleClearDone = () => {
    const newList = list.filter((item) => !item.isDone);
    setList(newList);
  };

  return (
    <section className="todoapp">
      <Header handleAdd={handleAdd} />
      <Main
        isAll={isAll}
        list={computedList}
        handleDelById={handleDelById}
        handleUpdateById={handleUpdateById}
        handleCheckAll={handleCheckAll}
      />
      <Footer restLen={restLen} handleClearDone={handleClearDone} type={type} setType={setType} />
    </section>
  );
}
function Footer({ handleClearDone, type, setType, restLen }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{restLen}</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a onClick={() => setType('all')} className={type === 'all' ? 'selected' : ''} href="#/">
            全部
          </a>
        </li>
        <li>
          <a
            onClick={() => setType('active')}
            className={type === 'active' ? 'selected' : ''}
            href="#/active"
          >
            未完成
          </a>
        </li>
        <li>
          <a
            onClick={() => setType('completed')}
            className={type === 'completed' ? 'selected' : ''}
            href="#/completed"
          >
            已完成
          </a>
        </li>
      </ul>
      <button onClick={handleClearDone} className="clear-completed">
        清除已完成
      </button>
    </footer>
  );
}

function Main({ list, handleDelById, handleUpdateById, isAll, handleCheckAll }) {
  return (
    <section className="main">
      <input
        checked={isAll}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => handleCheckAll(e.target.checked)}
      />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        {list.map((item) => {
          return (
            <li key={item.id} className={item.isDone ? 'completed' : ''}>
              <div className="view">
                <input
                  onChange={() => handleUpdateById(item.id)}
                  className="toggle"
                  type="checkbox"
                  checked={item.isDone}
                />
                <label>{item.task}</label>
                <button onClick={() => handleDelById(item.id)} className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Header({ handleAdd }) {
  const [task, setTask] = useState('');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAdd(task);
      setTask('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="new-todo"
        placeholder="需要做什么"
        autoFocus
      />
    </header>
  );
}

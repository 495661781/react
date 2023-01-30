import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDoneAction, updateTypeAction } from '../store/action/todo';

export default function Footer() {
  const dispatch = useDispatch();
  // 4 按功能模块名取出数据state.xxx
  const { type, list } = useSelector((state) => state.todo);

  const restLen = list.filter((item) => !item.isDone).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{restLen}</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a
            onClick={() => dispatch(updateTypeAction('all'))}
            className={type === 'all' ? 'selected' : ''}
            href="#/"
          >
            全部
          </a>
        </li>
        <li>
          <a
            onClick={() => dispatch(updateTypeAction('active'))}
            className={type === 'active' ? 'selected' : ''}
            href="#/active"
          >
            未完成
          </a>
        </li>
        <li>
          <a
            onClick={() => dispatch(updateTypeAction('completed'))}
            className={type === 'completed' ? 'selected' : ''}
            href="#/completed"
          >
            已完成
          </a>
        </li>
      </ul>
      <button onClick={() => dispatch(clearDoneAction())} className="clear-completed">
        清除已完成
      </button>
    </footer>
  );
}

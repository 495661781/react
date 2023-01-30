import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delByIdAction, updateByIdAction } from '../store/action/todo';

export default function Main() {
  // 4. 按功能模块取出数据
  const { list, type } = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(list));
    localStorage.setItem('todo-type', type);
  }, [list, type]);

  const dispatch = useDispatch();

  const computedList = list.filter((item) => {
    if (type === 'active') return !item.isDone;
    if (type === 'completed') return item.isDone;
    return true;
  });

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        {computedList.map((item) => {
          return (
            <li className={item.isDone ? 'completed' : ''} key={item.id}>
              <div className="view">
                <input
                  onChange={() => dispatch(updateByIdAction(item.id))}
                  checked={item.isDone}
                  className="toggle"
                  type="checkbox"
                />
                <label>{item.task}</label>
                <button
                  className="destroy"
                  onClick={() => dispatch(delByIdAction(item.id))}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

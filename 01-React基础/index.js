/**
 * 学习目标：React综合练习
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '五月天', content: '不打扰，是我的温柔' },
  { id: 3, name: '毛不易', content: '像我这样优秀的人' },
];
const divNode = (
  <div>
    {list.length ? (
      <ul className="list">
        {list.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <div>暂无数据</div>
    )}
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

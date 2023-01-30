/**
 * 学习目标：React样式处理-外联样式
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 1. 创建css文件
// 2. 导入css文件
import './index.css';

const divNode = (
  <div>
    {/* 3. 给标签分配类名 */}
    <h1 className="box">我是外部样式控制的</h1>
  </div>
);

ReactDOM.render(divNode, document.getElementById('root'));

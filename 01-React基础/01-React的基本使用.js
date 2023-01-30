/*
  学习目标：创建一个h1标签，并且渲染在页面上
    语法：
      1. React.createElement('标签的类型'， {标签属性名: 属性值}, 标签的内容)
      2. ReactDOM.render(React元素，挂载的真实DOM节点);
*/

// 1. 导入React 和ReactDOM
import React from 'react';
// React负责：创建React元素-虚拟DOM
// ReactDOM负责：将React元素（虚拟DOM）渲染成真正的DOM
import ReactDOM from 'react-dom';

// 2.  使用React创建一个React元素 - 虚拟DOM
// 注意：💥1. 如果标签不需要任何属性，给null或{}
const title = React.createElement('i', null, 'Hello React');
console.log('title  ----->  ', title);

// 3. 使用ReactDOM渲染一个React元素在界面上
ReactDOM.render(title, document.getElementById('root'));

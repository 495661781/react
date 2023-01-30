/*
  学习目标：React练习，创建元素
*/

import React from 'react';
import ReactDOM from 'react-dom';

// 注意：💥
// 1. class 是JS中的关键字， 标签的类名需要把class写成className
// 2. React不会做html字符串解析， 需要使用React.createElement创建子元素

// const title = React.createElement('div', { id: 'box', className: 'demo' }, 'hello React 72');

const liNode1 = React.createElement('li', null, '香蕉');
const liNode2 = React.createElement('li', null, '橘子');
const liNode3 = React.createElement('li', null, '苹果');
const ulNode = React.createElement('ul', { className: 'list' }, liNode1, liNode2, liNode3);

ReactDOM.render(ulNode, document.getElementById('root'));

// React是什么？
// 构建用户界面的JS库 - 创建DOM元素

// React的特点
// 1. 组件化开发
// 2. 声明式UI
// 3. 学习一次随处使用： ReactNative React360

// 1. 导入两个包 react 和 react-dom
// 2. React.createElement
// 3. ReactDOM.render 渲染React元素

// 脚手架创建项目
// 1. npm i -g react-create-app   react-create-app creat xxx-xxx
// 2. 👍npx create-react-app xxx-xx

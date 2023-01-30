/*
  学习目标：props深入-children属性的使用
  特点： props.children可以是任意数据类型
*/
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 本质：props.children属性： 指组件标签夹着的内容区域- 类似Vue中的插槽 */}
        <Child>123</Child>

        {/*  特点：props.children可以是任意数据类型 */}
        {/* 文字、数字、  */}
        <Child>{888}</Child>
        {/* 数组 */}
        <Child>{['hello React', 'Vue', 'TS']}</Child>
        {/* 对象 */}
        <Child2>{{ name: 'zs', age: 18 }}</Child2>
        {/* 💥函数 */}
        <Child3>
          {() => {
            return <i>我是一个函数渲染的内容</i>;
          }}
        </Child3>
        {/* 💥JSX */}

        <Child>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Child>
      </div>
    );
  }
}

function Child(props) {
  return (
    <div>
      <h1>我是Child组件</h1>
      <h2>{props.children}</h2>
    </div>
  );
}

function Child2(props) {
  return (
    <div>
      <h1>我是Child组件</h1>
      <h2>{props.children.age}</h2>
      <h2>{props.children.name}</h2>
    </div>
  );
}

function Child3(props) {
  return <div>{props.children()}</div>;
}

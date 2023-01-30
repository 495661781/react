/*
  学习目标：props三个特点- props可以传递任意的数据类型
*/

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*  1. props可以传递任意的数据类型 */}
        {/* 字符串 数字  */}
        <Child title="hello React" age={19}></Child>
        {/* 数组 对象 */}
        <Child list={[1, 2, 3, 4]}></Child>
        {/* 对象 */}
        <Child person={{ name: 'zs', gender: '男' }}></Child>
        {/*  💥函数 */}
        <Child fn={() => alert(123)}></Child>
        {/* 💥JSX */}
        <Child msg={<i>我是props传来的jSX</i>}></Child>
      </div>
    );
  }
}

// inc
class Child extends React.Component {
  render() {
    const { title, age, list, person, fn, msg } = this.props;
    return (
      <div>
        {title} -{age}
        <h1>{list}</h1>
        <h2>{JSON.stringify(person)}</h2>
        <button onClick={fn}>点我</button>
        {msg}
        <button
          onClick={() => {
            // 2. props是单项数据流，是只读的
            this.props.title = '我就想改改title';
          }}
        >
          点我修改props的值
        </button>
        <button
          onClick={() => {
            //  3. props是更加严格的单项数据流，无法绕过引用类型问题
            this.props.list.push(5);
          }}
        >
          点我修改引用类型数据
        </button>
      </div>
    );
  }
}

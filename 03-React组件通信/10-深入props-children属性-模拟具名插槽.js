import React, { Component } from 'react';

/*
  学习目标：
  1. 实现普通插槽，并且能具有默认值
  2. 实现具名插槽，
*/

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <h1>我喜欢React</h1>
        </Child>
        {/* 要求，有默认值 */}
        <Child></Child>

        <ChildName>{{ title: '鹅鹅鹅', content: '曲项向天歌' }}</ChildName>
        <ChildName>{{ title: <i>蜀道难</i>, content: '难于上青天' }}</ChildName>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    // 给children设置默认值
    const { children = '123' } = this.props;

    return <div>我是插槽传来的内容 -- {children}</div>;
  }
}

class ChildName extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.children.title}</h1>
        <h2>{this.props.children.content}</h2>
      </div>
    );
  }
}

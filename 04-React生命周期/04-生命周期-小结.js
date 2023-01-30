/*
  学习目标：生命周期-小结
  三大阶段，5个钩子函数（常用）

  挂载阶段
    1. construcor - 了解
      对标: vue中的created
      场景：（早期）初始化state 和 ref
    2. render
      作用：渲染界面
    3. componentDidMount
      对标：vue中的mounted
      场景：💥发请求、最先获取DOM、定时器、

  更新阶段：
    1. render
    2. componentDidUpdate
      对标： vue中的updated
      场景：做缓存
    注意：
      1. 不能在更新阶段的钩子函数中，调用setState
    触发更新的两种方式💥：
      1. setState，会触发更新阶段
      2. props的值改变，会触发更新阶段

  卸载阶段：
    1. componentWillUnMount
      对标：vue中beforeDestroy
      场景：💥做清除的动作，比如：定时器、监听的事件等

   钩子函数的执行顺序
   1.  挂载时 -> 更新阶段 -> 卸载阶段

   钩子函数的执行次数：
   1. render 和 componentDidUpdate 会多次执行
   2. 其它钩子函数，执行一次：componentDidMount/
*/

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    const { isShow } = this.state;
    return (
      <div>
        {isShow && <Child></Child>}
        <button
          onClick={() => {
            this.setState({ isShow: !isShow });
          }}
        >
          点我卸载子组件
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor() {
    console.log('constructor执行了  ----->  ', 1);
    super();
    this.state = {
      count: 100,
    };
  }

  render() {
    const { count } = this.state;
    console.log(' render执行了 ----->  ', 2);
    return (
      <div>
        <h1>我是Child - {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          点我更新state
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log(' componentDidMount执行了 ----->  ', 3);
  }

  componentDidUpdate() {
    console.log(' componentDidUpdate ----->  ', 4);
  }

  componentWillUnmount() {
    console.log(' componentWillUnmount ----->  ', 5);
  }
}

/**
 * 学习目标：通过ref - 获取组件实例对象
 * ref作用：1.获取dom元素  2.获取组件实例
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // 1. 创建ref对象
  childRef = React.createRef();

  render() {
    return (
      <div>
        <Child
          // 2. 绑定给dom元素或者子组件
          ref={this.childRef}
        ></Child>
        <button onClick={this.handleClick}> 点我获取子组件</button>
      </div>
    );
  }

  // 3. 通过ref对象.current去访问
  handleClick = () => {
    console.log('this.childRef.current  ----->  ', this.childRef.current.state.count);
    this.childRef.current.handleClick();
  };
}

class Child extends React.Component {
  state = {
    count: 1,
  };

  handleClick = () => {
    alert('我是子组件的click方法，我被触发了');
  };

  render() {
    return <div>我是子组件</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * 学习目标：通过ref - 获取dom元素
 * ref ： 1. 获取dom元素 2. 获取组件实例
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  iptRef = React.createRef();
  // 1. 创建ref对象

  render() {
    return (
      <div>
        {/* 2. 绑定给dom元素或者组件 */}
        <input type="text" ref={this.iptRef} />
        <button onClick={this.handleClick}> 点我访问input的value值</button>
      </div>
    );
  }

  handleClick = () => {
    // 3. 通过ref对象访问dom元素
    // 🔔 注意：ref对象.current指向了dom元素
    console.log('this.iptRef.current.value  ----->  ', this.iptRef.current.value);
  };
}

ReactDOM.render(<App />, document.getElementById('root'));

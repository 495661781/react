/**
 * 学习目标：受控组件
 */
import React from 'react';
import ReactDOM from 'react-dom';

// 注意：
// 1. 🔔在React中所有表单元素的改变事件用onChange
// 2. 原本的失去焦点，变成onBlur

class App extends React.Component {
  state = {
    name: 'zs',
  };

  render() {
    return (
      <div>
        <input
          type="text"
          // 1. 表单元素的value或checked，由state值控制
          value={this.state.name}
          // 2. 通过onChange事件，配合setState更新state的值
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          // 注意：
          // 1. 原生html的改变事件是onInput  原生html中onChange是失去焦点时才触发
          // 2. 🔔React对onChange做了特殊处理，每个表单元素都有onChange负责监听改变事件
          // onInput={(e) => {
          //   this.setState({ name: e.target.value });
          // }}

          // 3. html中原本的onChange失去焦点，变成了onBlur
          onBlur={() => console.log(2)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

/**
 * 学习目标：了解不可变数据，以及数组的修改方法
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // 🔔 React中修改数据，只能通过setState。没有第二条路
  // 🔔 使用新值，覆盖旧值
  state = {
    list: ['React', 'vue', 'TS'],
  };

  render() {
    return (
      <div>
        <h2> {this.state.list}</h2>
        <button onClick={this.handleClick}>点我修改list</button>
      </div>
    );
  }

  handleClick = () => {
    // const newList = this.state.list.slice();
    // newList.push('Vue3');

    this.setState({
      list: [...this.state.list, 'Vue3'],
    });
  };
}

ReactDOM.render(<App></App>, document.getElementById('root'));

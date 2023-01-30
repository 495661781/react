/**
 * 学习目标：早期解决this指向的方式
 *    方法： 👎认识即可（不推荐使用） 使用bind解决
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        {/* bind 改变this指向 */}
        {/* 👎 不推荐， 早期写法 */}
        <button onClick={this.handleClick.bind(this)}>点我访问this</button>
      </div>
    );
  }

  handleClick() {
    console.log('this  ----->  ', this);
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));

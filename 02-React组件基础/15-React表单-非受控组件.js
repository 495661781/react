/**
 * 学习目标：了解非受控组件
 *
 * 区别：
 * 非受控组件： 表单元素的值由DOM本身管理，而不受state的控制
 * 受控组件: 指的是表单元素的值由state控制，🔔更符合数据驱动的思想
 *
 * 推荐：
 * 👍工作中更推荐使用受控组件写表单
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  handleClick = () => {
    const name = document.querySelector('#name').value;
    const desc = document.querySelector('#desc').value;

    console.log('name, desc  ----->  ', name, desc);
  };

  render() {
    return (
      <div>
        姓名：
        <input type="text" name="username" id="name" />
        <br />
        描述：<textarea name="desc" id="desc"></textarea>
        <br />
        城市：
        <select name="city">
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br />
        是否单身：
        <input name="isSingle" type="checkbox" />
        <button onClick={this.handleClick}>点击提交到后台</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

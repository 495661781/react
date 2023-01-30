/**
 * 学习目标：多表单元素的事件方法优化成一个函数
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    name: 'zs',
    intro: '72',
    city: '3',
    isSingle: true,
  };

  handleChange = (e) => {
    console.log('e.target.name  ----->  ', e.target.name);
    // 2. 通过e.target.name获取到name属性的值
    const name = e.target.name;
    // 3. 通过{[name]} 动态插值的方式，复用setState更新state
    this.setState({ [name]: e.target.value });
  };

  handleChangeSingle = (e) => {
    const name = e.target.name;
    console.log('e.target.name  ----->  ', e.target.name);
    this.setState({ [name]: e.target.checked });
  };
  render() {
    //
    const { name, intro, city, isSingle } = this.state;
    return (
      <div>
        姓名：
        <input
          type="text"
          value={name}
          // 1. 设置name属性
          name="name"
          onChange={this.handleChange}
        />
        <br />
        描述：
        <textarea
          value={intro}
          // 1. 设置name属性
          name="intro"
          onChange={this.handleChange}
        ></textarea>
        <br />
        城市：
        <select
          value={city}
          // 1. 设置name属性
          onChange={this.handleChange}
          name="city"
        >
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br />
        是否单身：
        <input
          id="box"
          type="checkbox"
          // 1. 设置name属性
          name="isSingle"
          checked={isSingle}
          onChange={this.handleChangeSingle}
        />
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById('root'));

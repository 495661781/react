/**
 * 学习目标：受控组件-常见的表单元素
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // 1. state控制value或者checked
  state = {
    name: 'zs',
    intro: '72',
    city: '3',
    isSingle: true,
  };

  handleChangeName = (e) => {
    // 2. onChange 配合setState 更新数据
    this.setState({ name: e.target.value });
  };

  handleChangeIntro = (e) => {
    this.setState({ intro: e.target.value });
  };

  handleChangeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  handleChangeSingle = (e) => {
    // console.log('e.target.checked  ----->  ', e.target.checked);
    // 💥 checkbox 没有value属性。是checked属性，负责控制选中或者不选中
    this.setState({ isSingle: e.target.checked });
  };
  render() {
    //
    const { name, intro, city, isSingle } = this.state;
    return (
      <div>
        姓名：
        <input type="text" value={name} onChange={this.handleChangeName} />
        <br />
        描述：<textarea value={intro} onChange={this.handleChangeIntro}></textarea>
        <br />
        城市：
        <select value={city} onChange={this.handleChangeCity}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">广州</option>
          <option value="4">深圳</option>
        </select>
        <br />
        是否单身：
        <input id="box" type="checkbox" checked={isSingle} onChange={this.handleChangeSingle} />
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById('root'));

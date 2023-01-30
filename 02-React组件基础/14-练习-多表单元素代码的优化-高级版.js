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
    const { name, type, checked, value } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });

    console.log('this.state  ----->  ', this.state);
  };

  render() {
    const { name, intro, city, isSingle } = this.state;
    return (
      <div>
        姓名：
        <input type="text" value={name} name="name" onChange={this.handleChange} />
        <br />
        描述：
        <textarea value={intro} name="intro" onChange={this.handleChange}></textarea>
        <br />
        城市：
        <select value={city} onChange={this.handleChange} name="city">
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
          name="isSingle"
          checked={isSingle}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById('root'));

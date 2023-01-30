import React from 'react';

/*
  学习目标：使用PureComponent，优化组件的更新机制
*/
export default class App extends React.Component {
  state = {
    count: 0,
    msg: 'hello',
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickMsg = () => {
    this.setState({ msg: this.state.msg + '~' });
  };

  render() {
    return (
      <div>
        <h1>数量： {this.state.count}</h1>
        <h1>msg: {this.state.msg}</h1>
        <button onClick={this.handleClick}>点我修改数量</button>
        <button onClick={this.handleClickMsg}>点我修改msg</button>
        <Footer count={this.state.count}></Footer>
      </div>
    );
  }
}

// PureComponent
// 本质：React内部实现了shouldComponentUpdate比较props
// 原理：内部比较props不相等时，返回true，相等时返回false
// 注意： 不要滥用React.PureComponent
class Footer extends React.PureComponent {
  render() {
    console.log('Footer render被执行了  ----->  ');
    const { count } = this.props;
    return <div>我是Footer - {count}</div>;
  }
}

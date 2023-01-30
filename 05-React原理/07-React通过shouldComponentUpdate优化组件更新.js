import React from 'react';

/*
  学习目标：使用shouldComponentUpdate控制：
            count更新时，更新Footer组件
            msg更新时，不更新Footer组件

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

class Footer extends React.Component {
  // nextProps是父组件更新时，更新后的的props对象
  shouldComponentUpdate(nextProps) {
    // 通过判断this.props.count 和nextProps.,count是否相等来决定是否更新
    if (this.props.count !== nextProps.count) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('Footer render被执行了  ----->  ');
    const { count } = this.props;
    return <div>我是Footer - {count}</div>;
  }
}

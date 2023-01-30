import React from 'react';
import './index.css';
/*
  学习目标：实现删除一条评论的功能
*/

export default class App extends React.Component {
  state = {
    username: '',
    content: '',

    list: [
      {
        id: 1,
        name: 'xxx',
        content: '我是第一个',
      },
      {
        id: 2,
        name: 'yyy',
        content: '我是第2个',
      },
      {
        id: 3,
        name: 'zzzz',
        content: '我是第3个',
      },
    ],
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { username, content, list } = this.state;
    e.preventDefault();
    this.setState({
      list: [{ name: username, content, id: Date.now() }, ...list],
      username: '',
      content: '',
    });
  };

  handleDelById = (id) => {
    console.log('id  ----->  ', id);
    // 2. 通过id筛选list，setStae更新list
    const list = this.state.list.filter((item) => item.id !== id);

    this.setState({ list });
  };

  render() {
    const { username, content, list } = this.state;

    return (
      <div className="app">
        <form onSubmit={this.handlePublish}>
          <input
            value={username}
            className="user"
            type="text"
            placeholder="请输入评论人"
            onChange={this.handleChange}
            name="username"
          />
          <br />
          <textarea
            value={content}
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            onChange={this.handleChange}
            name="content"
          />
          <br />
          <button onClick={this.handleSubmit}>发表评论</button>
          <button type="button">清空评论</button>
        </form>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <h3>评论人: {item.name}</h3>
                <p>评论内容：{item.content}</p>
                {/* 1. 绑定click事件，并且传参id */}
                <button onClick={() => this.handleDelById(item.id)}>删除</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

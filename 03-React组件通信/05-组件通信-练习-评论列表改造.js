import React from 'react';
import './index.css';
/*
  学习目标：评论列表改造-父子通信
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
        <CommentList
          // 2. 父传子技术，传递list给子组件
          list={list}
          // 3. 子传父技术，传递函数给子组件
          handleDelById={this.handleDelById}
        ></CommentList>
      </div>
    );
  }
}

// 1. 使用函数式组件拆分出CommnetList子组件
function CommentList({ list, handleDelById }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>评论人: {item.name}</h3>
          <p>评论内容：{item.content}</p>

          <button
            // 4. 子组件内，调用props传来的函数
            onClick={() => handleDelById(item.id)}
          >
            删除
          </button>
        </li>
      ))}
    </ul>
  );
}

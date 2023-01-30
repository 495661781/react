import React, { Component } from 'react';

export default class Husband extends Component {
  /* 赚钱方法 */

  render() {
    const { money, handleMakeMoney } = this.props;
    return (
      <div style={{ padding: '10px', border: '10px solid #ccc' }}>
        <h1>老公的钱: {money}</h1>
        <button onClick={handleMakeMoney}>老公赚钱</button>
      </div>
    );
  }
}

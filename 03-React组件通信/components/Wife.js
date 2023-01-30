import React, { Component } from 'react';

export default class Wife extends Component {
  /* 花钱方法 */
  handleCostMoney = () => {
    // 想要花点老公赚的钱
    this.props.handleCost(5000);
  };

  render() {
    return (
      <div style={{ padding: '10px', border: '10px solid #ccc' }}>
        <button onClick={this.handleCostMoney}>老婆开始花钱</button>
      </div>
    );
  }
}

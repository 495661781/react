/*
  学习目标：使用useEffect发请求, 拿到数据渲染到ul>li中
  前置步骤：
     1. 下载axios 
     2. 封装request.js
*/

import React, { useEffect, useState } from 'react';

import request from './utils/request';

export default function App() {
  // 1. 声明状态
  const [list, setList] = useState([]);

  // 2. 封装异步函数 使用async await获取接口返回值
  async function loadData() {
    const res = await request({ url: '/v1_0/channels' });
    setList(res.data.channels);
  }

  useEffect(() => {
    // 3. 挂载后发请求
    loadData();
  }, []);

  // ❌ useEffect的第一参数，要求是同步函数，不能是异步函数
  // useEffect(async () => {

  // }, [])

  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

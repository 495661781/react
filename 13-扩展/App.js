import React from 'react';
// React中所有的文件经webpack打包后，会打包到同一个文件中
// 默认会产生样式冲突

/*
  学习目标：使用css-module去解决React中的样式冲突
  步骤：
     1. 改造样式文件名改为： xxx.module.css
     2. 通过JS 的导入方式导入样式文件
     3. 通过对象的属性名，访问类名

  注意：
    💥 React脚手架默认内置了css-modules的配置
    注意路径导入问题
*/

import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

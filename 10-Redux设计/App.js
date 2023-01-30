/**
 *  学习目标：Todos 案例
 *  ✅需求1：拆分组件、设计Redux仓库
 *  ✅需求2：初始list数据，渲染任务列表
 *  ✅需求3：根据id删除一条任务
 *  ✅需求4：根据id更新一条任务状态
 *  ✅需求5：清除已完成的功能
 *  ✅需求6：数据切换
 *  ✅需求7：统计剩余任务
 *  ✅需求8：新增功能
 *  ✅需求9：数据缓存
 */
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/base.css';
import './styles/index.css';

export default function App() {
  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

/*
  学习目标：创建Redux仓库store，获取仓库中的数据
*/

//  1.  下包 redux 导入createStore
// 💥 随着React18升级redux升级了，createStore名字变成了legacy_createStore
// 💥 通过legacy_createStore as createStore去导入
import { legacy_createStore as createStore } from 'redux';

//  2. 调用createStore函数，创建仓库
// 语法： createStore(function( state = 初始值){  return state })
const store = createStore(function (state = { count: 100, msg: 'Hello React' }) {
  // 💥 函数必须有返回值state
  return state;
});

// 3. 通过 store.getState，获取store中的数据
console.log('store.getState()  ----->  ', store.getState());

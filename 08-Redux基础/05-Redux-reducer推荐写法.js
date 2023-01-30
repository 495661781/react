/*
  学习目标：Redux推荐写法-优化reducer
  */

import { legacy_createStore as createStore } from 'redux';

//  3. 使用单独的变量，维护初始值
// 💥 命名语义化，就叫initState之类的
const initState = { count: 10, msg: 'Hello React', list: [], mes22: '123132' };

//  1. 抽取reducer函数，使用单独的函数声明reducer
function reducer(state = initState, action) {
  console.warn('action进入仓库了------>', action);

  //  2. 使用swtich语句，替换if else语句
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'des':
      return {
        ...state,
        count: state.count - 1,
      };
    // 💥 default相当于初始化值，记得return state
    default:
      return state;
  }
}

const store = createStore(reducer);

const unFn = store.subscribe(() => {
  console.log(store.getState().count, '<---store.getState().count ');
});

store.dispatch({ type: 'add' });

store.dispatch({ type: 'des' });

unFn();

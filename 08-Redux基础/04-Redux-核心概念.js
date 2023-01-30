/*
  学习目标：Redux核心概念-总结
  1. state： 声明状态，保存状态 
  2. Action：
    2.1 本质：普通的JS对象，具有type字段
    2.2 作用：描述发生了什么事情
  3. dispatch
    3.1 作用：触发一个修改动作
    3.2 💥 redux中修改state，只能通过dispatch。类似React中的setState
  4. reducer函数，（state，action） => newState
    4.1 作用：计算状态， 类似Vuex中的mutations
    4.2 本质：纯函数，固定输入固定数据
    4.3 不能发请求、不能访问DOM、不能使用随机数
  5. 不可变数据
    5.1 不能直接修改state
    5.2 👍 新值覆盖旧值
  6. store：上述内容合成起来就是store，数据仓库
  
*/

import { legacy_createStore as createStore } from 'redux';

const store = createStore(function (state = { count: 0, msg: 'Hello React', list: [] }, action) {
  console.warn('action进入仓库了------>', action);

  if (action.type === 'add') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'des') {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
});

store.dispatch({ typexxx: 'des' });
store.dispatch({ type: 'des' });

const unFn = store.subscribe(() => {
  console.log(store.getState().count, '<---store.getState().count ');
});

store.dispatch({ type: 'add' });

store.dispatch({ type: 'des' });

unFn();

store.dispatch({ type: 'des' });
store.dispatch({ type: 'des' });

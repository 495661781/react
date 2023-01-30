/*
  学习目标：subscribe 自动监听仓库数据的变化，打印出来每次变化的值
  
*/
import { legacy_createStore as createStore } from 'redux';

const store = createStore(function (state = { count: 0, msg: 'Hello React' }, action) {
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

store.dispatch({ type: 'des' });
store.dispatch({ type: 'des' });

// 语法： const 关闭监听的函数 = store.subscribe(回调函数)； 回调函数中可以获取到更新后的state
// 调用unFn就是关闭监听

// 💥 store.subscribe()放在dispatch之后，是不会触发回调的，相当于还没有开启监听
const unFn = store.subscribe(() => {
  // 回调函数会在state变化时，自动执行
  console.log(store.getState().count, '<---store.getState().count ');
});

store.dispatch({ type: 'add' });

store.dispatch({ type: 'des' });

// 关闭监听仓库数据
unFn();
// 💥unFn() 调用之后，不再触发回调函数，相当于取消了监听

store.dispatch({ type: 'des' });
store.dispatch({ type: 'des' });

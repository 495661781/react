import { legacy_createStore as createStore } from 'redux';

const initState = {
  msg: '',
  count: 101,
};

function reducer(state = initState, action) {
  console.warn('Redux Logger', action);
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + action.payload };
    case 'des':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

// 1. 封装函数创建action对象

// cmb 代码提示快捷键
/** 增加的action */
export function addAction(num) {
  return {
    type: 'add',
    payload: num,
  };
}

/** xxx */
export function desAction(num) {
  return {
    type: 'des',
    payload: num,
  };
}

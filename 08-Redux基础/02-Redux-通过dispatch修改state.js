/*
  学习目标：通过dispatch ，修改count + 1 和  -1
*/
import { legacy_createStore as createStore } from 'redux'

// 2. 通过reducer函数，第二个形参拿到action对象
const store = createStore(function (
  state = { count: 100, msg: 'Hello React' },
  action
) {
  console.warn('action进入仓库了------>', action)

  // 3. 通过判断action.type  编写不同计算的逻辑
  if (action.type === 'add') {
    // 4. 💥要通过返回新值覆盖旧值， 修改state，
    return {
      ...state,
      count: state.count + 1,
    }
  }

  // 3. 通过判断action.type  编写不同计算的逻辑
  if (action.type === 'des') {
    return {
      ...state,
      count: state.count - 1,
    }
  }

  return state
})

// console.log('store  ----->  ', store);
console.log('store.getState()  ----->  ', store.getState().count)

// 1. 通过dispatch函数发起修改的动作
// 💥 dispatch(Action对象)
// 💥 Action就是一个JS对象， 必须有type字段， 描述要干什么事情
store.dispatch({ type: 'add' })

console.log('store.getState()  ----->  ', store.getState().count)

store.dispatch({ type: 'des' })

console.log('store.getState()  ----->  ', store.getState().count)

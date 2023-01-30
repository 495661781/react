/*
  学习目标：Redux设计- 小结
  
  Reducer设计
    1. 按模块名拆分reducer
      💥 reducer文件名按功能模块命名
      💥 reducer函数名按功能模块命名
    2. 合并reducer
      💥按功能模块名命名键名
    3. 取出数据时，按功能模块名取出数据
  
  Action设计
    1. action文件按功能模块，拆分到不同的文件中
    2. type的值，按'功能模块名/具体功能'命名，"todo/add", "user/update"
    3. 使用常量保存type的值
    4. 使用actionType.js文件维护所有type的值 (JS中)
*/

import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;

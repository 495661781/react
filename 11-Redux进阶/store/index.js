import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/*
  学习目标：使用redux-dev-tool调试工具
  1. 装浏览器插件
  2. 配置插件
    2.1 下包 redux-devtools-extension
    2.2 创建store时，配置插件
    2.3 重启浏览器
*/

// 口诀： 工具包住应用， 应用 包住 中间件
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

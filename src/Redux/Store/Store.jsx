import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../Reducer/Index';
import thunk from 'redux-thunk';

// redux devTool
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

var store = createStore(
    combineReducers(reducer),
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;
import {createStore, combineReducers} from "redux";
import {login} from "./reducers/login";
import {articles} from "./reducers/articles";
import {windowSize} from "./reducers/resize";

const reducers = combineReducers({login,articles,windowSize});
export const store = createStore(reducers);
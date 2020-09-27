import {createStore, combineReducers} from "redux";
import {login} from "./reducers/login";
import {articles} from "./reducers/articles";

const reducers = combineReducers({login,articles});
export const store = createStore(reducers);
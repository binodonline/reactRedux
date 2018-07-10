import { combineReducers } from "redux";
// import { InputReducer as inputReducer } from './InputReducer';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    todos, visibilityFilter
});
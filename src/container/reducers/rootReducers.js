import {combineReducers} from 'redux';
import getDataReducer from './getDataReducer'
import getPagination from './getPagination'
export default combineReducers({
    data:getDataReducer,
    pagination:getPagination
})
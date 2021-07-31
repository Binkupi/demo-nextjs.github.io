import { combineReducers } from "redux";
import status from './status'
import sort from './sort'
const myReducer=combineReducers({
    
    status:status,
    sort:sort,
})
export default myReducer;              
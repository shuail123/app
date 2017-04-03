
import {combineReducers} from 'redux'
import {superLink} from './super/reducer.js'

function teacherLoginData(state = {}, action) {
    switch(action.type){
        case "teacher_login_data":
            return action.json;
            break;
            default:
            return state
    }
}
let totalReducer=combineReducers({
    teacherLoginData,
    superLink
});
export default totalReducer
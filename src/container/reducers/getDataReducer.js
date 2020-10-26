// import counter from '../actions/counter'
import {GETDATA, DECREAMENTAL} from '../types'

const data = []
export default function (state = data , action){
    switch(action.type){
        case GETDATA :
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }

}

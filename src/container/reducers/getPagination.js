// import counter from '../actions/counter'
import {
        LOADINGPAGINATION,
        PAGINATIONSUCCESS,
        PAGINATIONERROR,
        GETDATA
    } from '../types'

const initialState = {
    loading:false,
    pagination:[],
    error:{}
}
    


export default function (state = initialState , action){
    switch(action.type){
            case LOADINGPAGINATION:
                return {
                    ...state,
                    loading:true
                }
            case PAGINATIONSUCCESS :
                return {
                    ...state,
                    loading:false,
                    pagination:action.payload

                }
            case PAGINATIONERROR :
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default:
            return state
    }

}

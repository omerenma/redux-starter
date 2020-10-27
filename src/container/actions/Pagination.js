import axios from 'axios'
import {
    LOADINGPAGINATION,
    PAGINATIONSUCCESS,
    PAGINATIONERROR,
    PAGINATION
} from '../types';


export const paginationLoading = () => dispatch => {
    dispatch({
        type:LOADINGPAGINATION
    })
}

export const getPaginationSuccess = () => dispatch => {
    dispatch(paginationLoading());
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => dispatch({
            type:PAGINATIONSUCCESS,
            payload:res.data
        }))
        .catch(err => dispatch({
            type:PAGINATIONERROR,
            payload:err.data
        }))
    }


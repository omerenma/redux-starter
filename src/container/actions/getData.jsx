import axios from 'axios'
import {
    GETDATA
} from '../types'

 export const getData = () => dispatch => {
     axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res =>dispatch({
            type:GETDATA,
            payload:res.data
        }))

}


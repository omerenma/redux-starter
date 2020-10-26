import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './container/reducers/rootReducers'
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware]
const initialState = {};

const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        )
export default store
import { combineReducers } from 'redux'
import loginReducer from './LoginReducer'
import registerReducer from './RegisterReducer'

export default combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer
}) 
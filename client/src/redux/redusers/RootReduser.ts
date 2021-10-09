import { combineReducers } from 'redux'
import Cart from './cart'
import User from './user'

const RootReduser = combineReducers({
    Cart,
    User
})

export default RootReduser;
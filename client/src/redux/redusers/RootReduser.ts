import { combineReducers } from 'redux'
import Cart from './cart'
import User from './user'
import Locals from './localslist'

const RootReduser = combineReducers({
    Cart,
    User,
    Locals
})

export default RootReduser;
import { createStore } from 'redux'
import RootReduser from './redusers/RootReduser';


const Store = createStore(RootReduser);

export default  Store;
    

interface IAction {
    type: string,
    payload: {}
}
export interface IUser {
    name:  string,
    adress: string, 
    number: string,
    emale: string
}

const userdef = {
    name: "",
    adress:"",
    number: "",
    emale:""
}

const User = (userData : IUser = userdef, action : IAction) : IUser | {} => {
    switch (action.type) {
        case "ADD_USER_DATA":
            return( { ...action.payload  }  )
            break;
    
        default:
            return({...userData})
    }
}

export default  User;
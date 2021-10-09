
interface IAction {
    type: string,
    payload: {}
}


const User = (userData : {} = {}, action : IAction) => {
    switch (action.type) {
        case "":
            
            break;
    
        default:
            return({...userData})
    }
}

export default  User;
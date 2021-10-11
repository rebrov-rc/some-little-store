import { ILocObject } from "./localslist";


interface IAction {
    type: string;
    payload: {}
}

 interface ICartItem {
    id: string,
    name: string,
    cost: string
}
export interface ICartList {
    receipt_form: {
        receipt_selection: string,
        local_selection: {
            local_id: string,
            adress : string
        } | {local_id: null},
    },
    list: ICartItem[]
}

let cartList : ICartList = {
    receipt_form: {
        receipt_selection: 'market',
        local_selection: {local_id: null},
    },
    list: [
        {
            id: "001",
            name: "Petrocard",
            cost: "22550"
        },
        {
            id: "001",
            name: "Petrocard",
            cost: "22550"
        },
        {
            id: "001",
            name: "Petrocard",
            cost: "22550"
        },
        {
            id: "001",
            name: "Petrocard",
            cost: "1111"
        },
    ]
} 

const Cart = (cart : ICartList = cartList, action : IAction) => {
    const res = cart.receipt_form;
    switch (action.type) {
        case "RECEIPT":
            return({ 
                ...cart,
                receipt_form: {
                    ...res,
                    receipt_selection: action.payload,
                }
             })
             case "local_selection":
             return({
                ...cart,
                receipt_form: {
                    ...res,
                    local_selection: action.payload,
                }
             })
    
        default:
            return ({ ...cart  })
    }
}

export default Cart;
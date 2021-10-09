

interface IAction {
    type: string;
    payload: {}
}

interface ICartList {
    list: {}[]
}

let cartList : ICartList = {
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
            cost: "22550"
        },
    ]
} 

const Cart = (cart : ICartList = cartList, action : IAction) => {
    switch (action.type) {
        case "":
            
            break;
    
        default:
            return ({ ...cartList  })
    }
}

export default Cart;
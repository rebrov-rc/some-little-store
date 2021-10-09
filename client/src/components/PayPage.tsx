import React from 'react'
import { JsxElement } from 'typescript'

interface IPaypage {
    user: {},
    cart: {
        list: any   []
    }
}

const total = (arr : any[]) => {
    let res : number = 0;
for (let i = 0; i < arr.length; i++) {
    res += +arr[i].cost;
    
}
    return(res);
}

const PayPage : React.FC<IPaypage> = (props) => {
    return (
        <div style={{
            border: '1px solid white',
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>

                <div className="product-list">
                    {
                        props.cart.list.map((item : any) : JSX.Element => {
                            return(
                                   <div className="">
                                       <span>{item.name} </span> <span>{item.cost}p</span>
                                   </div>
                            )
                        })
                    }
                </div>

                <div className="total">
                    <span>Total: </span><span>
                        {
                            total(props.cart.list)
                        }
                    </span>
                </div>

                <div className="pay-button"></div>
                        <button>Pay</button>
        </div>

    )
}

export default PayPage

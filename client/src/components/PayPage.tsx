import React from 'react'
import { IUser } from '../redux/redusers/user';
import Modal from './Modal';



interface IPaypage {
    user: IUser,
    cart: {
        list: any[]
    },
    dispatch: any
}

const total = (arr : any[]) => {
    let res : number = 0;
for (let i = 0; i < arr.length; i++) {
    res += +arr[i].cost;
    
}
    return(res);
}

const order = (M: any, U: any, C: any, O: any) => {
    U.name.length != 0?  O("DONE"): M(true);
}



const PayPage : React.FC<IPaypage> = (props) => {
    const data = {name : '', number : '', emale : '',  adress: ''}
    const [ modal, setModal ]  = React.useState<boolean>(false);
    const [ osrder, setOrder ]  = React.useState<string>("");
    React.useMemo(()=>{
        setModal(false)
        if(props.user.name.length === 0){ setOrder("") }
    }, [props.user]);

    return (
        <div style={{
            border: '1px solid white',
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>

                { osrder.length != 0 && <div className=""><h1>{osrder}</h1></div> }
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

                {
                    props.user.name.length != 0? 
                            <div className="">
                                <div className="name">{props.user.name}</div>
                                <div className="phone">{props.user.number}</div>
                                <div className="emale">{props.user.emale}</div>
                                <div className="adress">{props.user.adress}</div>
                            </div>
                            :
                            "NO YOUR LOCAL DATA!"
                }

                <div className="pay-button">
                        <button onClick={() => { order(setModal, props.user, props.cart , setOrder) }}>Pay</button>
                        <button onClick={() => { props.dispatch({type: 'ADD_USER_DATA', payload: data} )} }>reset</button>
                </div>

                {
                    modal  &&  <Modal/>
                }

        </div>

    )
}

export default PayPage

import React from 'react'
import { IUser } from '../redux/redusers/user';
import { ICartList } from '../redux/redusers/cart';
import Modal from './Modal';
import { ILocs } from '../redux/redusers/localslist';
import UserForm from './UserForm';
import SelectLocalMarket from './SelectLocalMarket';



interface IPaypage {
    user: IUser,
    cart: ICartList,
    locals: ILocs,
    dispatch: any
}

const total = (arr : any[]) => {
    let res : number = 0;
for (let i = 0; i < arr.length; i++) {
    res += +arr[i].cost;
    
}
    return(res);
}

const order = (M: any, U: any, C: any, O: any, SM : any) => {
    if(C.receipt_form.receipt_selection === "market"){
        C.receipt_form.local_selection.local_id != null?  O("DONE") : SM(true)
    }
      if(C.receipt_form.receipt_selection === "delivery"){
          U.name.length != 0?  O("DONE"): M(true);
    }
}



const PayPage : React.FC<IPaypage> = (props) => {
console.log(props);


    const data = {name : '', number : '', emale : '',  adress: ''}
    const [ modal, setModal ]  = React.useState<boolean>(false);
    const [ selectMarket, setSelectMarket ]  = React.useState<boolean>(false);
    const [ selectMarketModal, setSelectMarketModal ]  = React.useState<boolean>(false);
    const [ receipt, setReceipt]  = React.useState<string>("market");
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
                <div className="receipt-forms">
                    <form  onChange={(e : any) => {
                        props.dispatch({type: 'RECEIPT', payload: e.target.id})
                        setReceipt(e.target.id);
                    }}>
                        <label><input type="radio" name="receipt" id="market" checked={props.cart.receipt_form.receipt_selection === "market"} />market</label>
                        <label><input type="radio" name="receipt" id="delivery" checked={props.cart.receipt_form.receipt_selection === "delivery"} />delivery</label>
                    </form>
                    {
                        props.cart.receipt_form.receipt_selection === "market" && <div className="market">
                            {
                                props.cart.receipt_form.local_selection.local_id != null ? 
                                    <div className="local-market"><p> { props.cart.receipt_form.local_selection.adress}</p></div>
                                :  
                                <div className="select-market" 
                                onClick={() => {setSelectMarket(true)}}
                                style={{
                                    cursor: "pointer",
                                }}><p>select market</p></div>
                            }
                            {
                                selectMarket ?
                                        <SelectLocalMarket setSelectMarket={setSelectMarket}  locals = {props.locals} dispatch={props.dispatch} />
                                    :
                                    <div className=""></div>
                            }
                        </div>
                    }
                    {
                        props.cart.receipt_form.receipt_selection === "delivery" && <div className="delivery">
                            {
                                props.user.name.length != 0? 
                                        <div className="">
                                            <div className="name">{props.user.name}</div>
                                            <div className="phone">{props.user.number}</div>
                                            <div className="emale">{props.user.emale}</div>
                                            <div className="adress">{props.user.adress}</div>
                                        </div>
                                        :
                                       <div className=""><p>
                                           NO YOUR LOCAL DATA!
                                           </p></div>
                            }
                        </div>

                    }
                </div>

                <div className="pay-button">
                        <button onClick={() => { order(setModal, props.user, props.cart , setOrder, setSelectMarketModal) }}>Pay</button>
                        <button onClick={() => { props.dispatch({type: 'ADD_USER_DATA', payload: data} )} }>reset</button>
                </div>

                {
                    modal  &&  <Modal Component={UserForm}/> ||
                    selectMarketModal  &&  <SelectLocalMarket setSelectMarket={setSelectMarket}  locals = {props.locals} dispatch={props.dispatch} />

                }

        </div>

    )
}

export default PayPage

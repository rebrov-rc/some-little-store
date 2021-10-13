import React from 'react'

const SelectLocalMarket : React.FC<any> = (props) => {
    return (
        <div className="selection">
        <select name="local-market" id="" onChange={(e : any) => {
            () => {
                console.log(e.target.value);  }
                props.dispatch({type: 'local_selection', payload: {local_id: e.target.id, adress: e.target.value }});
                props.setSelectMarket(false);
            }
        } >
            {
                props.locals.list.map((item : any) => {
                    return(
                        <option value={item.local_station + " " +  item.local_adress} id={item.local_id} >{item.local_station} : {item.local_adress}</option>
                    )
                })
            }
        </select>
    </div>
    )
}

export default SelectLocalMarket;

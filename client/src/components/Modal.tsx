import React from 'react'
import {connect} from 'react-redux'



const Modal : React.FC<any> = (props) => {
    console.log(props);
    
    const [ data, setData ] = React.useState<any>({
        name : '', number : '', emale : '',  adress: ''
    })
    const handler = (e : any) => {
        let newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata)
    }
    return (
        <div>
            <input onChange={(e : React.ChangeEvent<any>) =>{ handler(e) }} id='name' type="text" placeholder='name' value={data.name} />
            <input onChange={(e : React.ChangeEvent<any>) =>{ handler(e) }} id='number' type="text" placeholder='phone' value={data.number}/>
            <input onChange={(e : React.ChangeEvent<any>) =>{ handler(e) }} id='emale' type="text" placeholder='emale' value={data.emale}/>
            <input onChange={(e : React.ChangeEvent<any>) =>{ handler(e) }} id='adress' type="text" placeholder='adress' value={data.adress}/>
            <button onClick={() => { props.disp({type: 'ADD_USER_DATA', payload: data}) }}>ok</button>
        </div>
    )
}

const mapStateToProps = (s : any) => {}
const mapDToProps = (disp : (action : {type: string, payload: any}) => void) : any => ({
    disp
})

const WrapModal = connect(mapStateToProps ,mapDToProps )(Modal)
export default WrapModal;

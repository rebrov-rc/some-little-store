import React from 'react'
import { connect } from 'react-redux'
import PayPage from './PayPage'




const PayContainer : React.FC = () => {

    const mapStateToProps = (state : any) : any => ({
            user: state.User,
            cart: state.Cart
    })

    const mapDispatchToProps = (dispatch : any) : any  => ({
        dispatch
    })


    const PayWrap : any = connect(mapStateToProps, mapDispatchToProps)(PayPage)
    return ( <PayWrap/> )
}

export default PayContainer

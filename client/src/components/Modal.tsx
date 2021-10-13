import React from 'react'



const Modal : React.FC<any> = ({Component}) => {
    console.log(Component);

    return (
        <div>
            <Component/>
        </div>
    )
}

export default Modal;

import React from 'react'

const Congrats = (props) =>  {
    return (
        <div data-test="congrats-msg">
        {
            props.success 
                ? 'Success'
                : ''
        }
        </div>
    )
}

export default Congrats;
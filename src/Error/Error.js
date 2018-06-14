import React from 'react';

const error=(props)=>{
    return (
        <div className="Error">
            <p>{props.children}</p>
        </div>
    )
}

export default error;
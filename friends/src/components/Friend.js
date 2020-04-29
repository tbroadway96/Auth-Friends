import React from 'react'

const Friend = (props) => {
    return (
        <div 
            className='friend'
            style={{
                border: '5px solid black',
                borderRadius: '12px',
                background: 'coral',
                margin: '5px'
            }}
        >
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Email: {props.email}</h3>
        </div>
    )
}

export default Friend;
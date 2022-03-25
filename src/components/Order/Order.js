import React from 'react';
import './Order.css'

const Order = (props) => {
    console.log(props);
    return (
        <div className='choosen'>
            <p>{props.baal.name}</p>
        </div>
    );
};

export default Order;
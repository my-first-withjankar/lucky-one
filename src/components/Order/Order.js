import React, { useState } from 'react';
import SingleVespa from '../SingleVespa/SingleVespa';
import './Order.css'

const Order = ({ cart, chanceBtn }) => {
    const [getOne, setGetOne] = useState([])
    const get = (cart) => {
        let luckyOne = cart[Math.floor(Math.random() * cart.length)]
        setGetOne(luckyOne);
    }
    return (
        <div className='choosen'>
            <h1>Wait For Luck</h1>
            <div>

                {
                    cart.map(singleProduct => <SingleVespa key={singleProduct.id} singleProduct={singleProduct}></SingleVespa>)
                }

            </div>

            <button onClick={() => get(cart)} className='lucky-btn'>Find lucky One</button>
            <p>{getOne.name}</p>
            <button onClick={chanceBtn} className='chance-btn'>Take another chance</button>
        </div>
    );
};

export default Order;
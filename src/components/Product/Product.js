import React from 'react';
import './Product.css'
const Product = ({ hashi }) => {

    const { name, price, image } = hashi;
    return (
        <div className='singleVespa'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Product;
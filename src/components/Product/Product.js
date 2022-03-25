import React from 'react';
import './Product.css';


const Product = ({ singleVespa, addToCart }) => {

    const { name, price, image } = singleVespa;
    return (
        <div className='singleVespa'>
            <img src={image} alt="" />
            <div>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <p><button onClick={() => addToCart(singleVespa)} className='btn'>add to cart</button></p>
        </div>
    );
};

export default Product;
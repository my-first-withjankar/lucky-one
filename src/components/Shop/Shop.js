import { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [vespa, setVespa] = useState([]);
    let [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVespa(data))
    }, [])

    const addToCart = (singleVespa) => {
        let newCart = [];
        const exist = cart.find(product => product.id === singleVespa.id)
        if (!exist && cart.length < 4) {
            newCart = [...cart, singleVespa];
        }
        else {
            alert('opps , you cannot add more')
            return;
        }
        setCart(newCart)
    }
    const chanceBtn = () => {
        let newCart = [];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='vespa-container'>
                {
                    vespa.map(singleVespa =>
                        <Product
                            key={singleVespa.id} singleVespa={singleVespa}
                            addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart">
                <Order cart={cart} chanceBtn={chanceBtn}></Order>
            </div>

        </div>
    );
};

export default Shop;
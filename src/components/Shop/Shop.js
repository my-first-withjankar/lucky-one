import { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [vespa, setVespa] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVespa(data))
    }, [])

    const addToCart = (vespaDetails) => {
        // console.log(vespaDetails);
        const newCart = [...cart, vespaDetails];
        setCart(newCart)
    }
    // console.log(cart);
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
                <div className="wow">
                    <h1>Wait For Luck</h1>
                    {
                        cart.map(baal => <Order
                            key={baal.id}
                            baal={baal}
                        ></Order>)
                    }

                    <button>Find lucky One</button>
                    <button>Take another chance</button>
                </div>
            </div>

        </div>
    );
};

export default Shop;
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [vespa, setVespa] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVespa(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='vespa-container'>
                {
                    vespa.map(baaal => <Product key={baaal.id} hashi={baaal}></Product>)
                }

            </div>
            <div className="order-summery">
                <h1>order summary</h1>
            </div>

        </div>
    );
};

export default Shop;
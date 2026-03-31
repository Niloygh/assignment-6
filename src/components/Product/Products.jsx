import React, { use } from 'react';
import Product from './Product';

const Products = ({ cartPromise, selectCart, setSelectCart }) => {
    const carts = use(cartPromise)
    // console.log(carts)

    


    return (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
            {
                carts.map(cart => <Product key={cart.id} cart={cart} selectCart={selectCart} setSelectCart={setSelectCart} />) 
            }
        </div>
    );
};

export default Products;
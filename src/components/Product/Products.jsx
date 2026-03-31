import React, { use } from 'react';

const Products = ({ cartPromise }) => {
    // console.log(cartPromise)
    const carts = use(cartPromise)
    console.log(carts)
    return (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
            {
                carts.map(cart => <div key={cart.id} className='card card-body relative '>

                <div className="card w-96 bg-base-100 shadow-sm h-full">
                    <div className="card-body space-y-4">
                        <span className={`badge badge-xs ${cart.tag === 'New' ? 'green' : cart.tag === 'Popular' ? 'gray' : 'yellow'} absolute right-5 top-3 font-semibold text-[14px]  `}>{cart.tag}</span>
                        <div className="justify-between space-y-4">
                            <img src={cart.image} alt="" className='w-10 h-10' />
                            <h2 className="text-3xl font-bold">{cart.name}</h2>
                            <span className="text-lg"><span className='font-bold text-black text-2xl'>${cart.price}</span>/{cart.period}</span>
                            <p>{cart.description}</p>
                        </div>
                        <div classNameName="">
                            {
                                cart.features.map(item => <div>
                                <ul>
                                    <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                                    </li>
                                 </ul>
                            </div>)
                            }
                        </div>
                        <div className="mt-auto pt-6">
                            <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default Products;
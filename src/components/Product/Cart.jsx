import React from 'react';

const Cart = ({ selectCart, setSelectCart }) => {
    return (
        <div className='container mx-auto p-5 mb-20'>
            <h1 className='text-xl font-bold mb-5'>Your Cart</h1>

            {
                selectCart.map(item => <div key={item.id}>
                    <div className="card card-body shadow mb-5 bg-[#F9FAFC]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                                <img src={item.image} alt="" className='h-10 w-10' />
                                <div className="">
                                    <h1>{item.name}</h1>
                                    <p className='text-lg'><span className='text-xl font-bold'>${item.price}</span>/{item.period}</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <button className='btn border-none btn-outline btn-error'>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className="flex justify-between font-bold text-xl">
                <p className='text-gray-500'>Total</p>
                <p className='text-2xl pr-5'>$0</p>
            </div>
            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full mt-3'>Proceed to Checkout</button>

        </div>
    );
};

export default Cart;
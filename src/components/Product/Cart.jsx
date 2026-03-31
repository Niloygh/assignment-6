import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ selectCart, setSelectCart }) => {

    const totalPrice = selectCart.reduce((sum, item) => sum + item.price, 0)
    
    const handleDelete = (item) => {
        console.log('how')
        const filteredArray = selectCart.filter(i=> i.id !== item.id)
        setSelectCart(filteredArray)
        toast.success('Remove This Item')
    }
    
    const handlePayment = () => {
        setSelectCart([])
        toast.success('Payment Successful')
    }

    return (
        <div className='container mx-auto p-5 mb-20'>
            <h1 className='text-xl font-bold'>Your Cart</h1>

            {
                selectCart.length === 0 ? <p className='flex justify-center items-center py-10 font-bold text-xl'>Cart is empty</p> :

                    <div className="">
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
                                                <button 
                                                onClick={()=> handleDelete(item)}
                                                className='btn border-none btn-outline btn-error'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                        <div className="flex justify-between font-bold text-xl">
                            <p className='text-gray-500'>Total</p>
                            <p className='text-2xl pr-5'>${totalPrice}</p>
                        </div>
                        <button
                            onClick={handlePayment}
                            className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full mt-3'>Proceed to Checkout</button>
                    </div>
            }


        </div>
    );
};

export default Cart;
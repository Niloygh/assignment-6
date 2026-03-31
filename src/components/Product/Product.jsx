import React, { useState } from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { toast } from 'react-toastify';

const Product = ({cart, selectCart, setSelectCart}) => {
    const [buy, setBuy] = useState(false)

    const handleBuy = () => {
        setBuy(true)

    const ifFound = selectCart.find(item => item.id === cart.id)
    if(ifFound){
        toast.error('Item Already In Cart')
        return;
    }

    setSelectCart([...selectCart, cart])
    toast.success("Added To Cart Item")

        
    }
    
    return (
        <div key={cart.id} className='card card-body relative '>

                <div className="card max-w-96 bg-base-100 shadow-sm h-full">
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
                            <button
                            onClick={handleBuy} 
                            className={`btn ${buy ? 'bg-green-400' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'} text-white btn-block rounded-full`}>
                                {buy ? <span className='flex items-center gap-0'><IoIosCheckmark className='text-3xl'/> Added to cart</span> : 'Buy Now'  }
                                </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Product;
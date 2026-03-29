import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className="navbar justify-between bg-base-100 shadow-sm">
            <div className="">
                <a className="font-bold ml-5 text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">DigiTools</a>
            </div>

            <div className="flex gap-3 font-medium text-[101727] ">
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            
            <div className="flex-none">
                <div className="dropdown dropdown-end flex gap-3 items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <CiShoppingCart className='text-2xl'/>
                            <span className="badge badge-sm indicator-item ">0</span>
                        </div>
                    </div>

                    <button className='btn  bg-white font-medium '>Login</button>
                    <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
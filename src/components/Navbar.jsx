import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({selectCart}) => {
    return (
        <div className=" navbar  justify-between bg-base-100 shadow-sm">

            <div className="lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <p><a href="">Products</a></p>
                        <p><a href="">Features</a></p>
                        <p><a href="">Pricing</a></p>
                        <p><a href="">Testimonials</a></p>
                        <p><a href="">FAQ</a></p>
                        <button className=' btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Get Started</button>
                    </ul>
                </div>
            </div>


            <div className="">
                <a className="font-bold ml-5 text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">DigiTools</a>
            </div>

            <div className="hidden lg:flex gap-5 font-medium text-[101727] ">
                <p><a href="">Products</a></p>
                <p><a href="">Features</a></p>
                <p><a href="">Pricing</a></p>
                <p><a href="">Testimonials</a></p>
                <p><a href="">FAQ</a></p>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end flex gap-3 items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <CiShoppingCart className='text-2xl' />
                            <span className="badge badge-sm indicator-item ">{selectCart.length}</span>
                        </div>
                    </div>

                    <button className='btn bg-white md:font-medium '>Login</button>

                    <button className='hidden md:inline-flex btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
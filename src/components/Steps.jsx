import React from 'react';
import { IoIosRocket } from 'react-icons/io';
import { LuBox, LuUser } from 'react-icons/lu';

const Steps = () => {
    return (
        <div className='container mx-auto my-25'>
            <div className="text-center">
                <h2 className='text-5xl font-bold mb-5'>Get Started in 3 Steps</h2>
                <p >Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                <div className="card card-body shadow py-10 space-y-5">

                    <p className='w-7 h-7 rounded-full text-sm text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center ml-auto'>01</p>

                    <p className='h-20 w-20 rounded-full   bg-[#9514FA]/20 p-5 flex justify-center items-center mx-auto '><LuUser className='text-5xl text-[#4F39F6]  ' /></p>
                    <div className="text-center">
                        <h2 className='font-bold text-xl'>Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card card-body shadow py-10 space-y-5">

                    <p className='w-7 h-7 rounded-full text-sm text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center ml-auto'>02</p>

                    <p className='h-20 w-20 rounded-full   bg-[#9514FA]/20 p-5 flex justify-center items-center mx-auto '><LuBox className='text-5xl text-[#4F39F6]  ' /></p>
                    <div className="text-center">
                        <h2 className='font-bold text-xl'>Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs. </p>
                    </div>
                </div>
                <div className="card card-body shadow py-10 space-y-5">

                    <p className='w-7 h-7 rounded-full text-sm text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center ml-auto'>03</p>

                    <p className='h-20 w-20 rounded-full   bg-[#9514FA]/20 p-5 flex justify-center items-center mx-auto '><IoIosRocket  className='text-5xl text-[#4F39F6]  ' /></p>
                    <div className="text-center">
                        <h2 className='font-bold text-xl'>Start Creating</h2>
                        <p>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
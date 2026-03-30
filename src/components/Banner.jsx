import React from 'react';
import icon from "../assets/Rectangle.png"
import bannerImg from "../assets/banner.png"
import { CiPlay1 } from 'react-icons/ci';


const Banner = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 my-20'>
            <div className=" space-y-5">
                <div className="flex">
                    <div className='bg-[#E1E7FF] py-1 px-3 rounded-full font-semibold '>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-2'>
                            <img src={icon} alt="" />
                            <p>New: AI-Powered Tools Available</p>
                        </span>
                    </div>
                </div>
                <h2 className='font-bold text-7xl'>Supercharge Your Digital Workflow</h2>
                <p className='w-125'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today. Explore Products
                </p>
                <div className="flex gap-2 ">
                    <button className='btn py-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>

                    <button  
                    className='btn py-5 rounded-full border border-[#9514FA] '><CiPlay1></CiPlay1> Watch Demo</button>
                </div>

            </div>

            <div className="flex justify-end">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
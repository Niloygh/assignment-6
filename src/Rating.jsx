import React from 'react';

const Rating = () => {
    return ( 
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="flex w-full flex-col lg:flex-row  container mx-auto text-white  justify-center items-center ">
            <div className="card rounded-box grid grow place-items-center space-y-4">
                <h1 className='font-bold text-5xl'>50K+</h1>
                <p>Active Users</p>
            </div>

            <div className="border-r-2 h-15 "></div>
            
            <div className="card rounded-box grid grow place-items-center py-15">
                <h1 className='font-bold text-5xl'>200+</h1>
                <p>Premium Tools</p>
            </div>

            <div className="border-r-2 h-15 "></div>

            <div className="card rounded-box grid grow place-items-center py-15">
                <h1 className='font-bold text-5xl'>4.9</h1>
                <p>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Rating;
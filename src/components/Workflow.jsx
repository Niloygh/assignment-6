import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center'>
            <div className="container mx-auto py-25 space-y-4">
                <h1 className='text-[40px] font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='lg:w-150 lg:mx-auto text-white/80'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

                <div className="my-10">
                    <button className='btn w-40 rounded-full mr-4'>
                        <span  className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products
                        </span>
                    </button>

                    <button className='btn w-40 rounded-full bg-transparent text-white'>View Pricing</button>
                </div>
                <p className='text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
                
                
            </div>
            
        </div>
    );
};

export default Workflow;
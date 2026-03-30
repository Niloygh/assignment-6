import React from 'react';

const PricingCard = () => {
    return (
        <div className='container mx-auto py-30 px-5'>
            <div className="text-center">
                <h1 className='text-5xl font-bold mb-5'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-3">

                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                            <span className="text-xl text-[#627382]"><span className='text-3xl font-bold text-black'>$0</span>/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PricingCard;
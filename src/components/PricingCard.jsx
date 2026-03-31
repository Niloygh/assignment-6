import React from 'react';

const PricingCard = () => {
    return (
        <div className='container mx-auto md:px-0 lg:py-30 px-5 '>
            <div className="text-center">
                <h1 className='text-5xl font-bold mb-5'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 ">

                <div className="card max-w-96 shadow-md bg-[#F9FAFC]">
                    <div className="card-body">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className='text-[#627382] mb-7'>Perfect for getting started</p>
                            <span className="text-xl text-[#627382]"><span className='text-3xl font-bold text-black'>$0</span>/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                            
                        </ul>
                        <div className="mt-auto pt-6">
                            <button className="btn btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started Free</button>
                        </div>
                    </div>
                </div>

                
                <div className="card max-w-96 shadow-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white relative">
                    <div className="card-body">

                        <span className="badge badge-xs badge-warning absolute -top-2 left-1/2 -translate-x-1/2 py-2.5 px-4 font-bold text-[14px] bg-[#FEF3C6] text-[#BB4D00] rounded-full border-none ">Most Popular</span>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p className='mb-7'>Best for professionals</p>
                            <span className="text-xl text-white"><span className='text-3xl font-bold'>$29</span>/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs ">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                            
                        </ul>
                        <div className="mt-auto pt-6 ">
                            <button className="btn btn-block rounded-full bg-white"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>


                <div className="card max-w-96 shadow-md bg-[#F9FAFC]">
                    <div className="card-body">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className='text-[#627382] mb-7'>For teams and businesses</p>
                            <span className="text-xl text-[#627382]"><span className='text-3xl font-bold text-black'>$99</span>/Month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                            
                        </ul>
                        <div className="mt-auto pt-6">
                            <button className="btn btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PricingCard;
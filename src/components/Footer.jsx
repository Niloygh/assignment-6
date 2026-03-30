import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className="container mx-auto py-20 text-white">
                <div className="footer sm:footer-horizontal p-10 ">

                    <div className="space-y-4 w-80">
                        <h2 className='text-4xl font-bold'>DigiTools</h2>
                        <p className='light-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className="">
                        <h2 className='font-bold'>Product</h2>
                        <p className='light-white'>Features</p>
                        <p className='light-white'>Pricing</p>
                        <p className='light-white'>Templates</p>
                        <p className='light-white'>Integrations</p>
                    </div>

                    <div className="">
                        <h2 className='font-bold'>Company</h2>
                        <p className='light-white'>About</p>
                        <p className='light-white'>Blog</p>
                        <p className='light-white'>Careers</p>
                        <p className='light-white'>Press</p>
                    </div>

                    <div className="">
                        <h2 className='font-bold'>Resources</h2>
                        <p className='light-white'>Documentation</p>
                        <p className='light-white'>Help Center</p>
                        <p className='light-white'>Center</p>
                        <p className='light-white'>Community</p>
                    </div>

                    {/* icon  */}
                    <div className="">
                        <p>Social Links</p>
                        <div className="">

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
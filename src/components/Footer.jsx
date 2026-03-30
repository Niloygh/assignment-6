import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className="container mx-auto pt-20 pb-10 text-white">
                <div className="footer md:footer-horizontal p-10 ">

                    <div className="space-y-4 max-w-80">
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
                        <p className='text-2xl'>Social Links</p>
                        <div className='flex gap-2'>
                            <p className="bg-white p-2 rounded-full"><FaInstagram className='text-black text-xl'/></p>
                            <p className="bg-white p-2 rounded-full"><FaFacebookSquare className='text-black text-xl'/></p>
                            <p className="bg-white p-2 rounded-full"><FaXTwitter className='text-black text-xl'/></p>
                        </div>
                    </div>
                    
                </div>
                
                <hr className='text-white/50 my-5'/>

                <div className="flex justify-between">
                    <p className='light-white'>&copy; 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-5">
                        <p className='light-white'>Privacy Policy</p>
                        <p className='light-white'>Terms of Service</p>
                        <p className='light-white'>Cookies</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Footer;
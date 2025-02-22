import React  from "react";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{backgroundImage: `url(/header_img.png)`}} id='Header'>
            <Navbar />

        <div className='container text-center mx-auto px-6 py-4 text-white mb-4'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='mt-16 space-x-6'>
                <a href="#" className='px-8 py-4 border border-white rounded'>Projects</a>
                <a href="#" className='px-8 py-4 bg-blue-500 rounded cursor-pointer'>Contact US</a>
            </div>
        </div>


        </div>
    )
}

export default Header;
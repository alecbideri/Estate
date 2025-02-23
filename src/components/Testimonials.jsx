import React from "react";
import {assets, testimonialsData} from "../assets/assets.js";

const Testimonials = () => {
    return (
        <div className='container mx-auto py-10  lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='font-bold text-center  sm:text-4xl mb-4'>Customer <span className='font-light underline underline-offset-4 decoration-1'>Testimonials</span></h1>
            <p className= 'max-w-60 text-center mx-auto text-gray-500 mb-12'>Real Stories from Those Who Found Home with Us</p>
            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center'>
                        <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                        <h2 className='text-xl font-medium text-gray-700'>{testimonial.name}</h2>
                        <p className='text-gray-500 text-sm mb-2'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 mb-5 text-red-500'>
                            {Array.from({length: testimonial.rating} , (item , index)=>(
                                <img key={index} src={assets.star_icon} alt=""/>
                            ))}
                        </div>
                        <p className='text-gray-500'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
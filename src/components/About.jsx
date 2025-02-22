import React from "react";
import {assets} from "../assets/assets.js";

const About = () => {
    return (
       <div className='flex flex-col items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
          <h1 className='text-2xl font-bold sm:text-4xl mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our brand</span></h1>
          <p className='max-w-80 text-gray-500 text-center mb-8'>Passionate About Properties, Dedicated to your Vision</p>
          <div className='flex flex-col md:flex-row md:items-center md:gap-20'>
              <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="The brand image"/>
              <div className='flex flex-col items-center md:items-center mt-10 text-gray-500'>
                  <div className='grid grid-cols-2 gap-6 md:gap-10 2xl:pr-28'>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>10+</p>
                          <p>Years of Experience</p>
                      </div>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>12+</p>
                          <p>Projects Completed</p>
                      </div>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>20+</p>
                          <p>Mn. Sq. Ft. Delivered</p>
                      </div>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>25+</p>
                          <p>On going projects</p>
                      </div>
                  </div>
                  <div className='my-10 max-w-lg'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque dolor dolorem, fuga fugiat quibusdam quis sequi! Assumenda at blanditiis delectus dolorum, eveniet, exercitationem molestias nesciunt nostrum officia saepe temporibus!</p>
                      <button className='bg-blue-600 text-white py-2 px-8 rounded mt-8'>Learn more</button>
                  </div>
              </div>
          </div>
       </div>
    )
}

export default About;
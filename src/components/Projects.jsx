import React, {useEffect, useState} from "react";
import {assets, projectsData} from "../assets/assets.js";

const Projects = () =>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    // Update the view window of the slider relatively to the window width .

    useEffect(() => {
       const updateCardToShow = () => {
           if (window.innerWidth >= 1024) {
               setCardsToShow(3);  // Show 3 cards per row on large screens
           } else if (window.innerWidth >= 768) {
               setCardsToShow(2);  // Show 2 cards per row on medium screens
           } else {
               setCardsToShow(1);  // Show 1 card per row on small screens
           }
       };

       updateCardToShow();

       window.addEventListener("resize", updateCardToShow);
       return () => window.removeEventListener('resize', updateCardToShow);


    },[])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex+1) % projectsData.length);
    }

    const prevProject = () =>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1  : prevIndex - 1);
    }

    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden ' id='projects'>

            {/*Section title and text*/}

            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='font-light underline underline-offset-4 decoration-1 under'>Completed</span></h1>
            <p className=' text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

           {/* Slider buttons*/}

           <div className='flex justify-end items-center mb-8'>
               <button className='p-3 bg-gray-200 mr-2 rounded' aria-label='Previous project' onClick={prevProject}>
                   <img src={assets.left_arrow} alt="Left icon"/>
               </button>
               <button className='p-3 bg-gray-200 mr-2 rounded'  aria-label='Next Project' onClick={nextProject}>
                   <img src={assets.right_arrow} alt="Right icon"/>
               </button>
           </div>

        {/*Project slider*/}

         <div className='overflow-hidden'>
             <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                  style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
             >
                 {projectsData.map((project, index) => (
                     <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                         <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                         <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                             <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl  font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                 <p className='text-sm text-gray-500'>
                                     {project.price} | <span>{project.location}</span>
                                 </p>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>

        </div>
    )
}

export default Projects;
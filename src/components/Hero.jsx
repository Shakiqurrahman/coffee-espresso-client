import React from 'react';
import hero from "../assets/images/more/hero.png"

const Hero = () => {
    return (
       <div>
         <div className='text-white bg-cover bg-bottom h-[90vh] flex items-center'
         style={{
            backgroundImage: 'url("/src/assets/images/more/hero.png")',
          }}>
           <div className='max-width'>
            <div className='flex  justify-end'>
            <div className='md:w-[55%]'>
            <h1 className='text-3xl rancho-font font-semibold mb-4 rancho-font'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-sm rancho-font mb-6 font-thin leading-[25px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-[#E3B577] rancho-font font-bold px-5 py-2.5 text-[#242222]'>Learn More</button>
            </div>
            </div>
            </div> 
        </div>
       </div>
    );
};

export default Hero;
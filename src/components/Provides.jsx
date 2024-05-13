import React from 'react';
import img1 from '../assets/images/icons/1.png'
import img2 from '../assets/images/icons/2.png'
import img3 from '../assets/images/icons/3.png'
import img4 from '../assets/images/icons/4.png'

const Provides = () => {
    const data = [
        {
            id: 1,
            img: img1,
            title: 'Awesome Aroma',
            subTitle : 'You will definitely be a fan of the design & aroma of your coffee'
        },
        {
            id: 2,
            img: img2,
            title: 'High Quality',
            subTitle : 'We served the coffee to you maintaining the best quality'
        },
        {
            id: 3,
            img: img3,
            title: 'Pure Grades',
            subTitle : 'The coffee is made of the green coffee beans which you will love'
        },
        {
            id: 4,
            img: img4,
            title: 'Proper Roasting',
            subTitle : 'Your coffee is brewed by first roasting the green coffee beans'
        },
    ]
    return (
        <div className='bg-[hsl(47,19%,91%)] '>
           <div className="max-width grid gap-10 sm:grid-cols-2 lg:grid-cols-4 py-14">
           {
                data.map(i => (
                        <div className='flex flex-col items-center' key={i.id}>
                            <img className='size-[70px] mb-4' src={i.img} alt={`Image ${i.id}`} />
                            <h2 className='text-xl font-semibold rancho-font mb-2'>{i.title}</h2>
                            <p className='text-sm rancho-font text-center'>{i.subTitle}</p>
                        </div>
                ))
            }
           </div>
        </div>
    );
};

export default Provides;
import React from 'react'
import { Carousel } from 'flowbite-react';
import banner1 from "../pic/banner-1.png";
import banner2 from "../pic/banner-2.png";
import banner3 from "../pic/banner-8.png";
import banner4 from "../pic/banner-6.jpg";
import banner5 from "../pic/banner-7.jpg";





const Home = () => {
  return (
    <div className='bg-neutralSilver' id='Home'>
        <div className='h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl'>
           <Carousel>
                 <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                   <div className='bg-white drop-shadow-2xl'>
                    <img src={banner1} height={1000} width={1000} alt="" />
                   </div>
                   <div className='md:w-1/2'>
                    <h1 className='mb-4 text-5xl font-semibold leading-snug text-neurralDGrey md:w-3/4'>Technology for a 
                     <span className='text-brandPrimary'> Better Tommorrow</span> </h1>
                     <p className='mb-8 text-base text-neutralGrey'>Let's embark on this exciting journey of digital transformation and unlock the full
                      potential of social technology for your business. Together, we'll write a success story
                      that's not just about adapting to change, but about thriving in it.
                       </p>
                     <button className='btn-primary'>
                        Register
                       </button>
                   </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                   <div>
                    <img src={banner2} height={1000} width={1000} alt="" />
                   </div>
                   <div className='md:w-1/2'>
                    <h1 className='mb-4 text-5xl font-semibold leading-snug text-neurralDGrey md:w-3/4'>learn and Earn
                     <span className='text-brandPrimary'> in 2 month</span> </h1>
                     <p className='mb-8 text-base text-neutralGrey'>Let's embark on this exciting journey of digital transformation and unlock the full
                      potential of social technology for your business. Together, we'll write a success story
                      that's not just about adapting to change, but about thriving in it.
                       </p>
                     <button className='btn-primary'>
                        Register
                       </button>
                   </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                   <div className='bg-white drop-shadow-2xl'>
                    <img src={banner3} className='balb' height={1000} width={1000}  alt="" />
                   </div>
                   <div className='md:w-1/2'>
                    <h1 className='mb-4 text-5xl font-semibold leading-snug text-neurralDGrey md:w-3/4'>Explore your 
                     <span className='text-brandPrimary'> Ability</span> </h1>
                     <p className='mb-8 text-base text-neutralGrey'>Let's embark on this exciting journey of digital transformation and unlock the full
                      potential of social technology for your business. Together, we'll write a success story
                      that's not just about adapting to change, but about thriving in it.
                       </p>
                     <button className='btn-primary'>
                        Register
                       </button>
                   </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                   <div className='bg-white drop-shadow-2xl'>
                    <img src={banner4} height={1000} width={1000} alt="" />
                   </div>
                   <div className='md:w-1/2'>
                    <h1 className='mb-4 text-5xl font-semibold leading-snug text-neurralDGrey md:w-3/4'>Grow your 
                     <span className='text-brandPrimary'> Own Startup</span> </h1>
                     <p className='mb-8 text-base text-neutralGrey'>Let's embark on this exciting journey of digital transformation and unlock the full
                      potential of social technology for your business. Together, we'll write a success story
                      that's not just about adapting to change, but about thriving in it.
                       </p>
                     <button className='btn-primary'>
                        Register
                       </button>
                   </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                   <div className='bg-white drop-shadow-2xl'>
                    <img src={banner5} height={1000} width={1000} alt="" />
                   </div>
                   <div className='md:w-1/2'>
                    <h1 className='mb-4 text-5xl font-semibold leading-snug text-neurralDGrey md:w-3/4'>Let the world 
                     <span className='text-brandPrimary'> Recognize you</span> </h1>
                     <p className='mb-8 text-base text-neutralGrey'>Let's embark on this exciting journey of digital transformation and unlock the full
                      potential of social technology for your business. Together, we'll write a success story
                      that's not just about adapting to change, but about thriving in it.
                       </p>
                     <button className='btn-primary'>
                        Register
                       </button>
                   </div>
                </div>
            </Carousel>
        </div>
    </div>
  );
};

export default Home

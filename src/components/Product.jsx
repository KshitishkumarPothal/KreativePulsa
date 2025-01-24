import React from 'react'
import product from '../pic/product.png'
import c1 from '../pic/company-1.png'
import c2 from '../pic/company-2.png'
import c3 from '../pic/company-3.png'
import c4 from '../pic/company-4.png'
import c5 from '../pic/company-5.png'


const Product = () => {
  return (
   <div id='product'>
       <div className='px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl'>

            <div className='flex flex-col items-center justify-between gap-16 mx-auto md:w-11/12 md:flex-row'>
                <div>
                     <img src={product}  alt="" />
                </div>
          
                <div className='mx-auto md:w-3/5'>
                     <h2 className='mb-4 text-4xl font-semibold text-neutralGrey md:w-4/5'>Let's Create a Website <span className='text-brandPrimary'>For You</span></h2>
                     <p className='mb-6 text-sm text-justify md:w-3/4 text-neutralGrey' >Creating a website for You is an exciting endeavor that aims to provide users with a
                      seamless and informative online experience. Our goal is to design a user-friendly interface that showcases your's capabilities and serves as a hub for 
                      accessing valuable information and resources. The website will feature a clean and modern design, intuitive navigation, and responsive layout to ensure 
                      accessibility across various devices..</p>
                      <button className='btn-primary'>Learn More</button>
               </div>
            </div>

        </div>
        <div className='px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver'>
          <div className='flex flex-col items-center justify-between gap-auto md:flex-row'>
               <div className=' md:w-1/3'>
                    <img src="pic\logo12.png" className='balb'  alt="" />
               </div>
               <div className='mx-auto md:w-2/3'>
                    <div>
                         <p className='mb-8 text-sm leading-6 text-justify md:w-4/5 text-neutralGrey'>Welcome to KreativePulse, where business excellence meets expert guidance. 
                         We are your trusted partner on the journey to success, offering tailored solutions to businesses of all sizes and industries. With a proven track
                          record of driving growth, optimizing operations, and enhancing profitability, our team of seasoned business consultants is dedicated to elevating 
                          your organization to new heights.
                          <br />
                          <br />At KreativePulse, we understand that every business is unique. That's why we take a personalized approach, working closely with you 
                          to identify challenges, capitalize on opportunities, and develop strategic roadmaps that deliver tangible results. Whether you're a startup 
                          looking to gain a competitive edge or an established enterprise seeking to adapt to a changing market, we have the knowledge, experience, 
                          and creativity to help you thrive.
                         </p>
                         <h5 className='mb-2 text-xl font-semibold text-brandPrimary'>Kshitish Kumar Pothal</h5>
                         <p className='mb-5 text-base text-neurralDGrey'>Creater of KreativePulse</p>
                         <div>
                              <div className='flex flex-wrap items-center gap-8'>
                                   <img src={c1} width={50} height={50} className='curser-pointer' alt="" />
                                   <img src={c2} width={50} height={50} className='curser-pointer' alt="" />
                                   <img src={c3} width={50} height={50} className='curser-pointer' alt="" />
                                   <img src={c4} width={50} height={50} className='curser-pointer' alt="" />
                                   <img src={c5} width={50} height={50} className='curser-pointer' alt="" />
                                   <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neurralDGrey'>Meet all customer{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             height="1rem"
                                             width="1rem"
                                             viewBox="0 0 448 512"
                                             
                                             className='inline-block ml-2'>

                                             <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                        </a>
                                   </div>

                              </div>
                         </div>
                    </div>

               </div>
          </div>
        </div>
   </div>
  )
}

export default Product

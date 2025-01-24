import React from 'react'
import aboutImg from "../pic/about-us.png"
import s11 from "../pic/status-11.png"
import s21 from "../pic/status-21.png"
import s6 from "../pic/status-6.png"
import s51 from "../pic/status-51.png"


const About = () => {
  return (
    <div id='About'>
        {/* about text */}
        <div className='px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl'>
            <div className='flex flex-col items-center justify-between gap-16 mx-auto md:w-11/12 md:flex-row'>
                <div>
                     <img src={aboutImg} alt="" />
                </div>
          
                <div className='mx-auto md:w-3/5'>
                     <h2 className='mb-4 text-4xl font-semibold text-neutralGrey md:w-4/5'>Along the way, The journey <span className='text-brandPrimary'>start with you</span></h2>
                     <p className='mb-6 text-sm text-justify md:w-3/4 text-neutralGrey' >We take a collaborative and client-centric approach to consulting. We work closely with you to gain a deep 
                         understanding of your business, challenges, and objectives. This partnership ensures that our recommendations
                         are not just effective but also aligned with your vision. <br />      Our mission is simple yet profound: to empower businesses of all sizes to reach their ful
                          potential. We believe that every organization has untapped potential, and our role is to uncover it and guide our clients on a path to sustainable growth.
                          <br />We take a collaborative and client-centric approach to consulting. We work closely with you to gain a deep understanding of your business, challenges, 
                          and objectives. This partnership ensures that our recommendations are not just effective but also aligned with your vision.
                          Ready to take your business to the next level? We would love to hear from you.</p>
                      <button className='btn-primary'>Learn More</button>
               </div>
            </div>

        </div>

        {/* company status */}
        <div className='px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver'>
          <div className='flex flex-col items-center justify-between gap-auto md:flex-row'>

               <div className=' md:w-1/2'>
                     <h2 className='mb-4 text-4xl font-semibold text-neutralGrey md:w-4/5'>Milestone Moments: Celebrating Our <span className='text-brandPrimary'> Company's Success</span></h2>
                     <p className='mb-6 text-sm text-justify md:w-3/4 text-neutralGrey' >At <span className='text-brandPrimary'>KreativePulse </span>, we are dedicated to transforming your dreams into reality. 
                     With a passion for excellence and a commitment to innovation, we deliver tailored solutions that not only meet your needs but exceed your expectations. Our team of experts combines years of 
                     industry experience with cutting-edge technologies to provide you with the highest quality products/services. </p>
               </div>
          {/* states */}
                  <div className='flex flex-col justify-around gap-12 mx-auto md:w-1/2 sm:flex-row sm:items-center'>

                   <div className='space-y-8 '>
                      <div className='flex items-center gap-8 '>

                        <img src={s11} width={100} height={100} alt="" />
                           <div>
                               <h4 className='text-2xl font-semibold text-neurralDGrey'>14,523</h4>
                               <p>Members</p>
                           </div>
                           
                      </div>

                      <div className='flex items-center gap-8 '>

                        <img src={s21}  width={100} height={100} alt="" />
                           <div>
                               <h4 className='text-2xl font-semibold text-neurralDGrey'>250+</h4>
                               <p>Partnership</p>
                           </div>
                           
                      </div>



                    </div>
                    <div className='space-y-8 '>
                      <div className='flex items-center gap-8 '>

                        <img src={s6}  width={100} height={100} alt="" />
                           <div>
                               <h4 className='text-2xl font-semibold text-neurralDGrey'>100M+</h4>
                               <p>Revinue</p>
                           </div>
                           
                      </div>

                      <div className='flex items-center gap-8 '>

                        <img src={s51}  width={100} height={100} alt="" />
                           <div>
                               <h4 className='text-2xl font-semibold text-neurralDGrey'>50+</h4>
                               <p>Branches</p>
                           </div>
                           
                      </div>



                    </div>

                   </div>
                   
          </div>
          
        </div>

    </div>
  )
}

export default About

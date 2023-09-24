import React from 'react'

const Newslater = () => {
  return (
    <div className='px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver' id='faq'>
      <div className='flex items-center justify-center mx-auto lg:w-2/5'>
          <div className='text-center '>

              <h2 className='mb-6 text-2xl font-semibold text-neurralDGrey lg:text-4xl lg:leading-snug md:w-4/5'>
              Unlocking <span className='text-brandPrimary'>  Success</span></h2>
              <p className='mb-4 text-xl text-justify md:w-3/4 text-neutralGrey'>Expert Business Consultants Share Strategies for Thriving in Today's Economy...</p>
              <div className='flex items-center justify-center '>
                <button className='btn-primary'>Get a Demo
                         <svg xmlns="http://www.w3.org/2000/svg"
                                     height="1rem"
                                     width="1rem"
                                     viewBox="0 0 448 512"
                                     className='inline-block ml-2'>

                              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                         </svg>
                </button>
              </div>

           </div>
      </div>
    </div>
  )
}

export default Newslater

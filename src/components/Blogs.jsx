import React from 'react'


const Blogs = () => {
  const blogs = [
    { id: 1, tittle:"let's create a website", image:"src/pic/blog-1.png"},
    { id: 2, tittle:"how's digital market work", image:"src/pic/blog-2.png"},
    { id: 3, tittle:"let's increase your revinue", image:"src/pic/blog-3.png"},
];
  return (
    <div>
      <div className='px-4 mx-auto my-12 lg:px-12 max-w-screen-2xl' id='Blogs'>
                  <div className='mx-auto text-center md:w-1/2'>

                    <h2 className='mb-4 text-4xl font-semibold text-neutralGrey md:w-4/5'>New Age <span className='text-brandPrimary'> Mareketing</span></h2>
                     <p className='mx-auto mb-8 text-sm text-justify md:w-3/4 text-neutralGrey' >New age marketing is a dynamic and evolving field that has transformed 
                     the way businesses connect with their target audiences. Unlike traditional marketing approaches, which often relied heavily on one-way
                     communication channels, new age marketing embraces a two-way dialogue between brands and consumers. This shift is primarily driven by the 
                     digital revolution and the proliferation of social media platforms, which have given consumers unprecedented access to information and the
                     ability to voice their opinions.</p>

                  </div>
                  {/* all blogs */}
                  <div className='grid items-center justify-between grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2'>
                    {
                      blogs.map( blog => <div key={blog.id} className='relative inline-block mx-auto mb-12'>
                        <img src={blog.image} className='transition-all cursor-pointer balb hover:scale-110'  alt=''/>
                        <div className='absolute left-0 right-0 px-4 py-8 mx-auto text-center bg-white rounded-md shadow-lg shadow-gray-950 md:w-3/4 -bottom-12'>
                          <h3 className='mb-3 font-semibold text-neutralGrey'>
                            {blog.tittle}
                          </h3>
                          <div className='flex items-center justify-center gap-8 '>
                          <a href="/" className='font-bold text-brandPrimary hover:text-neurralDGrey'>Read more{" "}
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             height="1rem"
                                             width="1rem"
                                             viewBox="0 0 448 512"
                                             className='inline-block ml-2'>

                                             <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                         </svg>
                            </a>

                            </div>

                        </div>
                        </div>)
                    }
                  </div>
        
      </div>
    </div>
  )
};

export default Blogs

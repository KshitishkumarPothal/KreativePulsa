import React from 'react'
import l1 from '../pic/logo-11.png'
import l2 from '../pic/logo-21.png'
import l3 from '../pic/logo-31.png'
import l4 from '../pic/logo-41.png'
import l5 from '../pic/logo-51.png'
import l6 from '../pic/logo-61.png'
import s1 from '../pic/service-11.png'
import s2 from '../pic/service-21.png'
import s3 from '../pic/service-31.png'
import s4 from '../pic/service-41.png'
import s5 from '../pic/service-51.png'
import s6 from '../pic/service-61.png'
import s7 from '../pic/service-71.png'


const Service = () => {
  
const services = [{id : 1,tittle : "Business Strategy Consulting" ,description:"Helping clients define their long-term goals, formulate strategies, and make informed decisions to achieve sustainable growth.", image:s1},
                  {id : 2,tittle : "Financial Advisory Services" ,description:"Assisting with financial planning, budgeting, forecasting, and investment strategies to optimize financial performance.", image:s2},
                  {id : 3,tittle : "Human Resources Consulting" ,description:"Offering guidance on HR policies, talent acquisition, performance management, and employee development", image:s3},
                  {id : 4,tittle : "Marketing and Branding Consulting" ,description:"Creating marketing strategies, brand positioning, and customer acquisition plans to boost brand awareness and sales.", image:s4},
                  {id : 5,tittle : "Risk Management and Compliance" ,description:"Helping businesses identify and mitigate risks, ensuring they comply with regulations and industry standards.", image:s5},
                  {id : 6,tittle : "Sales and Revenue Growth Strategies" ,description:"Developing sales and revenue growth plans, including sales training and channel optimization", image:s6},
                  {id : 7,tittle : "International Expansion" ,description:"Providing guidance on entering global markets and navigating international business.", image:s7},
                ]
                

  return (
    <div className='px-4 py-16 mx-auto md:px-14 max-w-screen-2xl' id='Service'>
       <div className='my-8 text-center'>
           <h2 className='mb-2 text-4xl font-semibold text-neurralDGrey'>Our <span className='text-brandPrimary'>Special</span> Clients</h2>
           <p className='text-neutralGrey'>We have been working with more then 100+ clients</p>
       </div>
       {/* company logo */}
       <div className='my=12 flex flex-wrap justify-between items-center gap-8 '>
        <img src={l1} height={100} width={100} alt="" />
        <img src={l2} height={100} width={100} alt="" />
        <img src={l3} height={100} width={100} alt="" />
        <img src={l4} height={100} width={100} alt="" />
        <img src={l5} height={100} width={100} alt="" />
        <img src={l6} height={100} width={100} alt="" /> 

       </div>
       {/* service card */}
       <div className='my-8 text-center'>
       <h2 className='mb-2 text-4xl font-semibold text-neurralDGrey'>Manage Your <span className='text-brandPrimary'> Entire System </span> With us </h2>
           <p className='text-neutralGrey'>some special service provide by our team specially for you.</p>
       </div>
       {/* card */}
       <div className='grid gap-5 mx-auto md:grid-cols-2 mt-14 lg:grid-cols-3 md:w-11/12'>
           {
           
               services.map(service =>  <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80
                rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-l-4 hover:border-b-4  hover:border-indigo-800 
                transition-all duration-300 flex items-center justify-center h-full'>
                <div>
                   <div className='bg-[#E8F5E9] h-18 mb-4 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                        <img src={service.image} className='-ml-5' alt="sorry no pic" />
                   </div>
                   <h4 className='px-2 mb-2 text-2xl font-bold text-neurralDGrey'>{service.tittle}</h4>
                   <p className='text-sm text-neutralGrey'>{service.description}</p>

                 </div>

              </div>)
           }

        </div>

    </div>
  )
}

export default Service

import React, { useEffect, useState } from 'react'
import logo from '../pic/logo21.png'
import { Link } from 'react-scroll';
import { FaXmark, FaBars} from "react-icons/fa6";




const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen]= useState(false);
    const[isSticky, setIsSticky]= useState(false);
   
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }


    useEffect(()=>{
        const handScroll = () =>{
          if(window.scrollY > 100){
            setIsSticky(true);
          }
          else{
            setIsSticky(false);
          }

        };
        window.addEventListener('scroll',handScroll);
         
        return()=>{
              window.addEventListener('scroll',handScroll);
        }
    });

    //nav array
    const navItems = [
        {link: "Home", path: "Home"},
        {link: "Service", path:'Service'},
        {link: "About", path:"About"},
        {link: "Product", path:"product"},
        {link: "Testinomial", path:"Blogs"},
        {link: "FAQ", path:"faq"}
    ];

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-white md:bg-transparant'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "stisky top-0 left-0 right-0 border-b bg-white duration-300 ": ""}`}>
          <div className='flex items-center justify-between gap-8 text-base'>
            <a href="" className='text-2*1 font-semibold flex items-center space-x-0' >
                <img src={logo} className='items-center inline-block w-20' alt="logo" />
                <span className='text-[#141c22]'>KreativePulse</span>
            </a>

            {/* nav for large device */}

                
              <ul className='hidden space-x-12 md:flex'>
                  {
                    navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100}
                     key={path} className='block text-base cursor-pointer text-neutralGrey hover:text-brandPrimary first:font-medium'>{link}</Link>)
                     
                  }
              </ul>
                
            {/* btn for large device */}

             <div className='items-center hidden space-x-12 lg:flex'>
                    <a href="/" className='hidden lg:flex utems-center text-brandPrimary hover:text-grey900'>log in</a>
                    <button className='px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neurralDGrey'>sign up</button>
              </div>

            {/* menu btn for only mobile device */}

              <div className='md:hidden'>
                 <button 
                 onClick={toggleMenu} 
                  className='text-neurralDGrey focus:outline-none focus:text-grey-500'>
                      {
                      isMenuOpen ? (<FaXmark className='w-6 h-6 '/>) : 
                      (<FaBars className='w-6 h-6 '/>)
                      }
                  </button>

              </div>

          </div>

          {/* nav item for mobile device */}
          <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
          {
                    navItems.map(({link, Path}) => <Link to={Path} spy={true} smooth={true} offset={-100}
                     key={Path} className='block text-base text-black cursor-pointer hover:text-brandPrimary first:font-medium'>{link}</Link>)
                     
                  }

          </div>

        </nav>
    </header>
  )
}

export default Navbar

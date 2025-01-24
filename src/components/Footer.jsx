import React from 'react'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin, BsTelegram, BsPersonWorkspace} from 'react-icons/bs';
import logo from "../pic/logo213.png"



const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          
          <div className='flex items-center justify-between gap-8 text-base'>
            <a href="" className='text-2*1 font-semibold flex items-center space-x-0' >
                <img src={logo} className='items-center inline-block w-20' alt="logo" />
                <span className='text-[#141c22]'>KreativePulse</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="quick links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Home
                </Footer.Link>
                <Footer.Link href="#" >
                  Service
                </Footer.Link>
                <Footer.Link href="#">
                  About
                </Footer.Link>
                <Footer.Link href="#">
                  Product
                </Footer.Link>
                <Footer.Link href="#">
                  Blogs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/KshitishkumarPothal/KshitishkumarPothal.git">
                  Github
                </Footer.Link>
                <Footer.Link href="https://instagram.com/k_shit_ish?igshid=MzNlNGNkZWQ4Mg==">
                  Instagram
                </Footer.Link>
                <Footer.Link href="mailto:kshitishkumarpothal@gmail.com">
                  Gmail
                </Footer.Link>
                <Footer.Link href="https://wa.me/qr/SVUYP7E4V6HLD1">
                  WhatsApp
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/kshitish-kumar-pothal-671848237">
                  LinkedLn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="#">
                  Rules
                </Footer.Link>
                <Footer.Link href="#">
                  Subscription
                </Footer.Link>
                <Footer.Link href="#">
                  Service book
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="KreativePulse"
            href="#"
            year={2023}
          />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/kumar.kshitish.devil"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://instagram.com/k_shit_ish?igshid=MzNlNGNkZWQ4Mg=="
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://kshitishkumarpothal.github.io/portfolio/"
              icon={BsPersonWorkspace}
            />
            <Footer.Icon
              href="https://github.com/KshitishkumarPothal/KshitishkumarPothal.git"
              icon={BsGithub}
            />
             <Footer.Icon
              href="https://www.linkedin.com/in/kshitish-kumar-pothal-671848237"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://t.me/no_o_o_m"
              icon={BsTelegram}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter

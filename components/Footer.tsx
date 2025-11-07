import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className=' text-white bg-red-900 w-full min-h-[20%] '>
        <div className='px-6 py-8 md:py-[100px] grid md:grid-cols-2 gap-2 font-medium '>
            <div className='text-xl md:text-2xl grid gap-5'>
                <Logo/>
                <p>CCC is one of the leading distributors of industrial chemicals in Poland.</p>
            </div>
            <div className='grid gap-4 md:grid-cols-3 justify-evenly'>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Company</h2>
                    <ul className="space-y-2 text-black dark:text-white text-xl">
                        <li><a href="#" className=" hover:text-primary">Home</a></li>
                        <li><a href="/About" className=" hover:text-primary">About</a></li>
                        <li><a href="/Products" className=" hover:text-primary">Products</a></li>
                        <li><a href="/Contact" className=" hover:text-primary">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Business</h2>
                    <ul className="space-y-2 text-black dark:text-white text-xl">
                        <li><a href="mailto:caboletcoatchemicals@gmail.com" className=" hover:text-primary">Send Us An Email</a></li>
                        <li className=" hover:text-primary">Call Us Today<br></br> <span>+48727936551</span></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Address</h2>
                    <ul className="space-y-2 text-black dark:text-white text-xl">
                        <li>63-900 RAWICZ ul:JANA SKRZETUSKIEGO 8/7,POLAND.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div className='px-6 py-4 md:py-7 border-t border-grey flex justify-center'>
            <p className='font-medium text-xl'>
                Copyright © 2023 Cabolet Coat Chemicals | Powered by Cabolet Coat Chemicals
            </p>
        </div>
    </div>
  )
}

export default Footer
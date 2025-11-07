import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'


const links=[
    {name:'Home' , href:'/'},
    {name:'About' , href:'/About'},
    {name:'Product' , href:'/Products'},
    {name:'Contact Us' , href:'/Contact'},
]

const NavBar = () => {
  return (
    <div className='bg-red-900 z-100 flex items-center justify-between p-6 md:px-12 fixed w-full h-[15%]'>
      <div>
        <Logo/>
      </div>

      <div className='hidden lg:flex items-center gap-6 text-2xl font-semibold text-white font-serif'>
            {links.map((link)=>(
                <Link href={link.href} key={link.name} className='border-r-2 border-b-2 border-white px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 hover:text-black active:text-black active:border-black'>
                    {link.name}
                </Link>
            ))}
        </div>

        <div className='lg:hidden '>
            <Sheet >
                <SheetTrigger><Menu/></SheetTrigger>
                <SheetContent className='pt-14 z-100'>
                    <SheetHeader>
                    <SheetDescription>
                        <div className='grid gap-4'>
                            {links.map((link)=>(
                                <Link href={link.href} key={link.name} className='text-2xl font-semibold'>
                                    {link.name}
                                </Link>
                            ))}
                        </div> 
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center  font-serif'>
        <Image
            src="/logo1.png"
            alt="Picture"
            width={50}
            height={50}                    
        />
        <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold text-green-700 '>CABOLET</p>
            <p className='text-xl font-bold text-blue-800 leading-3'>Coat Chemicals</p>
        </div>
    </div>
  )
}

export default Logo
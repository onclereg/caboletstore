import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center'>
        <Image
            src="/logo1.png"
            alt="Picture"
            width={50}
            height={50}                    
        />
        <div>
            <p className='text-2xl font-bold text-green-700'>CABOLET</p>
            <p className='text-xl font-bold text-blue-800'>Coat Chemicals</p>
        </div>
    </div>
  )
}

export default Logo
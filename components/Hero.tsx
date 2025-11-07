import React from 'react'

const Hero = () => {
    
  return (
    <section className='p-8 min-h-screen w-full text-white grid grid-cols-1 justify-center gap-4 bg-[url(/chem7.jpg)] brightness-70 object-fill bg-cover'>
        <div className='grid gap-2 md:max-w-[70vw] h-[65vh] mx-auto'>
            <h2 className='text-3xl md:text-7xl font-extrabold align-bottom pt-14'>Cabolet Coat Chemicals.</h2>
            <p  className='text-xl md:text-3xl font-normal'>
                Cabolet Coat Chemicals (CCC) is one of the leading distributors of
                industrial chemicals in Poland. CCC is engaged in the supply and distribution of Industrial Chemicals, Pharmaceutical Raw Materials, and Food Chemicals of a wide variety to large, medium, and small scale industries like the Mining, Oil Refining, Food & Beverages, textiles & Printing, Breweries, Pharmaceuticals among others.
            </p>
        </div>
        <div className='flex justify-center'>
            <a href='/Contact'><button className='bg-red-800 p-6 my-6 rounded-2xl'>GET IN TOUCH</button></a>
        </div>
    </section>
  )
}

export default Hero
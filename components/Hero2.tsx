import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <div>
        <div className='h-full grid md:grid-cols-2 bg-white text-black text-xl md:text-3xl font-semibold px-14 py-[150px]'>
            <div className='grid gap-6'>
                <h1 className=' text-3xl md:text-7xl font-bold'>Process & Capabilities</h1>
                <p>Our chemical production and supply system was originally designed to efficiently deliver specialty chemicals and through our investment to renovate and modernize the site, CCC is efficient, and a very reliable value-added source for your external chemical needs. Whether you are scaling up on an existing process or looking for a partner to develop your process for chemical needs, or in need of any additional capacity or seeking to defer capital expenditures – our experienced team is ready to meet your needs.</p>
            </div>
            <div className=' md:pr-8' >
                <Image
                        src="/class_image.png"
                        alt="Picture"
                        width={500}
                        height={500}                    
                    />
            </div>
        </div>

        <section className='w-full h-full text-black grid lg:grid-cols-3 bg-linear-to-r from-white to-indigo-300 px-6 py-[150px] text-2xl'>
            <div  className='grid gap-5'>
                <div >
                    <Image
                        src="/class_image1.png"
                        alt="Picture"
                        width={500}
                        height={500}                    
                    />
                </div>
                <div className='text-xl md:3xl grid gap-2 p-2'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Sustainable Solution Empowerment</h1>
                    <p>Analyzing our products’ contributions to the sustainability needs of our customers’ value chains Society and our customers have been taking a greater interest in the business contribution to sustainability over the past decades.</p>
                </div>
            </div>
            <div className='grid gap-5'>               
                <div className='text-xl md:3xl grid gap-2  p-2'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Management, Goals and Dialog</h1>
                    <p>We carry out our corporate purpose “We create the chemistry for a sustainable future” by pursuing goals along our entire value chain. In this, we aim 100% growth and safety.
                        As part of our responsibility, we engage in stakeholder dialog.</p>
                </div>
                <div >
                    <Image
                        src="/class_image3.png"
                        alt="Picture"
                        width={500}
                        height={500}                    
                    />
                </div>
            </div>
            <div  className='grid gap-5'>
                <div >
                    <Image
                        src="/flat.jpg"
                        alt="Picture"
                        width={400}
                        height={400}                    
                    />
                </div>
                <div className='text-xl md:3xl gap-2  p-2'>
                    <h1 className='text-2xl md:text-4xl font-bold'>We create Chemistry for a Sustainable Future</h1>
                    <p>We always want to contribute to a world in 100% ways that provides viable futures loaded with enhanced quality of life for everyone. We do so by creating chemistry for our customers and by making the best use of available resources.</p>
                </div>
            </div>
        </section>

        <div className='h-full grid md:grid-cols-2 bg-white text-black text-xl md:text-3xl font-semibold px-8 md:px-14 py-[150px]'>
            <div className='flex flex-col gap-2 md:gap-5 items-center md:p-4'>
                <h1 className='text-2xl md:text-7xl font-bold'>Our Circular Economy Involvement</h1>
                <p>This means decoupling growth from resource usage.
                    CCC is driving the economy by making the most of the resources of our planet.
                    We make them usable for as long as possible, minimize wastage and creating values.</p>
            </div>
            <div >
                <Image
                    src="/chem.jpg"
                    alt="Picture"
                    width={800}
                    height={800}
                    
                    />
            </div>
        </div>
        <div className='h-full grid md:grid-cols-2 gap-6 md:gap-10 bg-white text-black text-xl md:text-3xl font-semibold px-14 py-[150px]'>
            <div >
                <Image
                    src="/chem2.jpg"
                    alt="Picture"
                    width={800}
                    height={800}
                    
                    />
            </div>
            <div className='grid gap-2'>
                <h1 className='text-3xl md:text-7xl font-bold'>Trusted Chemicals</h1>
                <p>We are your No.1 Stop for Chemicals.
                CCC’s Chemical Services is a leading Polish's chemical manufacturing and selling company with over 15 years’ experience.</p>
                <div>
                    <a href='/Contact'><button className='bg-red-800 p-3 my-3 rounded-2xl text-xl md:text-2xl'>GET IN TOUCH</button></a>
                </div>
            </div>
            
        </div>

        <section className='w-full h-full text-black grid lg:grid-cols-3 gap-2 bg-linear-to-r from-white to-indigo-300 px-6 py-[150px] text-xl'>
            <div  className='grid gap-5'>
                <div >
                    <Image
                        src="/chem3.jpg"
                        alt="Picture"
                        width={300}
                        height={300}                    
                    />
                </div>
                <div className=' grid gap-2'>
                    <h1 className='text-4xl font-bold'>Acetic Acid</h1>
                    <p>When you buy acetic acid from us, you’re buying from a business you can trust. As a leading polish's chemical manufacturers, ZCC is extremely proud of our reputation built over 15 year. Our customer service team is always willing to help with your queries. Simply email us for a quote or technical question..</p>
                </div>
            </div>
            <div className='grid gap-5'>               
                <div className='grid gap-2'>
                    <h1 className='text-4xl font-bold'>Methylated Spirit</h1>
                    <p>Industrial methylated spirits were created to avoid paying taxes on alcohol.
                        If it cannot be consumed, it is exempt from paying tax. Denaturing alcohol provides a solution to permit legitimate use and manufacture of ethanol for cheap industrial use..</p>
                </div>
                <div >
                    <Image
                        src="/spirits1.jpg"
                        alt="Picture"
                        width={500}
                        height={500}                    
                    />
                </div>
            </div>
            <div  className='grid gap-5'>
                <div >
                    <Image
                        src="/chems4.jpg"
                        alt="Picture"
                        width={400}
                        height={400}                    
                    />
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-4xl font-bold'>Potassium Permanganate</h1>
                    <p>Potassium Permanganate is an inorganic salt compound with strong oxidizing properties. When dissolved in water, it changes into a vivid pink colored solution, which when evaporated leaves behind black shiny crystals. The product is produced by fusing manganese dioxide and potassium hydroxide.</p>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Hero2
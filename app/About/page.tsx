import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        <section className='p-8 min-h-screen w-full text-black grid grid-cols-1 justify-center gap-4 bg-[url(/backgroundimg.avif)] object-fill'>
            <div className=' md:max-w-[50vw] mx-auto'>
                <p  className='text-xl lg:text-3xl font-semibold'>
                    <h2 className='text-3xl md:text-7xl font-extrabold align-bottom pt-[150px] flex justify-center'>About Us.</h2><br></br>
                    CCC is one of the leading distributors of industrial chemicals in Poland. CCC is engaged in the supply and distribution of Industrial Chemicals, Pharmaceutical Raw Materials, and Food Chemicals of a wide variety to large, medium, and small scale industries like the Mining, Oil Refining, Food & Beverages, textiles & Printing, Breweries, Pharmaceuticals among others
                </p>
            </div>
        </section>
        <div className='bg-gray-300 min-h-[50vh] text-black pb-10 md:pb-28 px-8 md:px-16 grid md:grid-cols-2 gap-10 text-xl md:text-2xl font-medium'>
            <div className='bg-white p-8 grid gap-3 justify-center mt-[-100]'>
                <hr className='w-15 border-4 border-red-800'></hr>
                <h1 className='text-3xl font-bold'>What we do!</h1>
                <p>At CCC, we create the chemistry for future.
                    We infuse economic success with environmental protection and social responsibility through science and innovation. We make it easy for our customers in any industry to meet their current and future needs.
                </p>
            </div>
            <div className='bg-white p-8 grid gap-3 justify-center mt-[-100]'>
                <hr className='w-15 border-4 border-red-800'></hr>
                <h1 className='text-3xl font-bold'>Our Mission</h1>
                <p>Cabolet Coat Chemicals prides itself in rendering superior, distinctive, and personalized customer service in the supply and distribution of Industrial chemicals of a wide variety to small, medium, and large scale companies in the Food Processing, Breweries, Mining, Textile, and Printing as well as oil industries in the most effective manner whilst creating a guaranteed value for its stakeholders.
                </p>
            </div>
        </div>
        <div className='h-full grid md:grid-cols-2 gap-6 md:gap-10 bg-white text-black text-3xl font-semibold px-14 py-[150px]'>
            <div >
                <Image
                    src="/main.jpg"
                    alt="Picture"
                    width={800}
                    height={800}                    
                    />
            </div>
            <div className='text-xl md:text-2xl font-normal flex flex-col gap-5'>
                <h1 className='text-2xl md:text-4xl font-bold'> OUR VISION </h1>
                <p>In achieving this feat, we strive to keep abreast with the development in the chemical world to enable us to understand and respond more effectively and promptly to the needs of our customers.
                It is also our goal to seek a close working relationship with our customers in order to develop and tailor the best possible solutions for them.</p>
            </div>            
        </div>

        <div className='h-full grid md:grid-cols-2 gap-6 md:gap-10 bg-white text-black text-3xl font-semibold px-14 py-[150px]'>
            <div className='text-xl md:text-2xl font-normal flex flex-col gap-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>GREAT TEAM WORK</h1>
                <p>Our team of hardworking and dedicated professionals whose mission is to provide quality products and services to commodity chemical markets. We work to align and focus the interests of our global customers and suppliers with those of our shareholders, employees, and communities.
                </p>
            </div> 
            <div >
                <Image
                    src="/class_image3.png"
                    alt="Picture"
                    width={800}
                    height={800}                    
                />
            </div>           
        </div>

        <div className='h-full grid md:grid-cols-2 gap-6 md:gap-10 bg-white text-black text-xl md:text-3xl font-semibold px-14 py-[150px]'>
            <div className='md:pt-20'>
                <Image
                    src="/class_image1.png"
                    alt="Picture"
                    width={800}
                    height={800}                    
                    />
            </div>
            <div className='text-xl md:text-2xl font-normal flex flex-col gap-5'>
                <h1 className='text-3xl md:text-6xl font-bold flex justify-center'> Bussiness 2022 </h1>
                <div className='grid gap-4'>
                    <div  className=' flex flex-col gap-3'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Best Products</h1>
                        <p>We provide our customers with the best available products meet their current and future needs. You'll find detailed info on our products by looking up your industry.</p>
                    </div>
                    <div  className=' flex flex-col gap-3'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Covid-19 and Measures</h1>
                        <p>The coronavirus pandemic is currently posing major challenges to many people and also to companies. Only together we can be successful in overcoming this global health crisis..</p>
                    </div>
                    <div  className=' flex flex-col gap-3'>
                        <h1 className='text-2xl md:text-4xl font-bold'>100% Chemical Solution</h1>
                        <p>Our fully integrated corporate absolute Chemical solutions and sustainability to impact safety providing shareholders, companies, and industries the very possible best chemical solutions that suits your industry or company needs.</p>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default About
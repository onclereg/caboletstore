import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className='p-8 h-[70vh] md:min-h-screen w-full text-black grid justify-center align-baseline gap-4 bg-[url(/chem5.jpg)] bg-cover'>
            <div className=' md:max-w-[60vw] mx-auto '>
                <p  className='text-xl md:text-3xl font-semibold'>
                 <span className='text-3xl md:text-7xl font-extrabold align-bottom pt-[150px] md:pt-[250px]  flex justify-center'>CONTACT US</span><br></br>
                    Our customer service team are ready to discuss your requirements and specifications, and get to deliver the best deal for your industry or business.
                </p>
            </div>
        </section>
        <div className='grid gap-4 text-xl font-normal bg-white px-6 md:px-[70px] py-10 md:py-[150px] text-black'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Contact Us</h1>
            <p  className='text-2xl md:text-3xl font-semibold'>Address</p>
            <p>63-900 RAWICZ ul:JANA SKRZETUSKIEGO 8/7,POLAND.</p>
            <p>Phone: +48727936551
            </p>
            <p>E-mail: <span className='text-red-500 font-serif'>caboletcoatchemicals@gmail.com</span>
            </p>
        </div>

        <div className='grid md:grid-cols-2 gap-20 text-xl font-medium text-black bg-white px-6 md:px-12 py-10 md:py-[100px]'>
            <div className='grid gap-5'>
                <h1 className='text-xl md:text-3xl font-bold'>Would you like to get in touch privately?</h1>
                <p>We are ready to assist you in anyway possible to make sure provide the right service for you. All our staffs and agents are ready to assist you with any information you might need when it comes to buying or transporting chemicals.</p>
            </div>
            <div className='flex justify-end items-center pr-10'>
                <button className='bg-red-400 hover:bg-red-800 p-6 my-6 rounded-xl'>+48727936551</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
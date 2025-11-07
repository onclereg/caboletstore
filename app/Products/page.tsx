import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div>
        <section className='p-8 h-[70vh] md:min-h-screen w-full text-black grid grid-cols-1 justify-center gap-4 bg-[url(/backgroundimg.avif)] bg-cover'>
            <div className=' md:max-w-[50vw] mx-auto'>
                <p  className='text-xl md:text-3xl font-semibold pt-[150px]'>
                    <h2 className='text-3xl lg:text-7xl font-extrabold align-bottom md:pt-[150px] flex justify-center'> PRODUCTS</h2><br></br>
                    No matter the facility or industry, we have all it takes to meet your industry’s or company’s needs.
                </p>
            </div>
        </section>
        <div className='min-h-screen grid md:grid-cols-2 gap-6 md:gap-10 bg-white text-black px-14 py-[50px]'>
            <div className='md:pt-[100px]'>
                <Image
                    src="/products.jpeg"
                    alt="Picture"
                    width={700}
                    height={700}                    
                    />
            </div>
            <div className='text-xl font-normal flex flex-col gap-5'>
                <h1 className='text-2xl md:text-4xl font-bold flex justify-center'> Browse our Products </h1>
                <div className='grid md:grid-cols-3'>
                    <ul className=' text-base'>
                        <h1 className='text-xl md:text-2xl font-semibold my-4'>High Demand</h1>
                        <li>(DPs)</li>
                        <li>Ethyl Piperonal 480</li>
                        <li>Diluent Adhesive</li>
                        <li>Compound (DPN)</li>
                        <li>Petroleum Solvent Additive</li>
                        <li>98 (PSA-98)</li>
                        <li>Acetic Acid</li>
                        <li>Formic Acid</li>
                        <li>Hydrochloric Acid</li>
                        <li>Nitric Acid</li>
                        <li>Sulphuric Acid</li>
                        <li>Phosphoric Acid</li>
                        <li>Mono Ethanol Amine</li>
                        <li>Caustic Soda Pearls</li>
                        <li>Citric Acid</li>
                        <li>Hydrated Lime</li>
                        <li>Methylene Chloride</li>
                        <li>Methyl Ethyl Ketone</li>
                    </ul>
                    <ul className=' text-base'>
                        <h1 className='text-xl md:text-2xl font-semibold my-4'>More Products</h1>
                        <li>Tri Ethanol Amine</li>
                        <li>Ethyl Alcohol</li>
                        <li>Isopropyl</li>
                        <li>Methanol</li>
                        <li>Nam sit amet</li>
                        <li>Methylated Spirit</li>
                        <li>Butyl Acetate</li>
                        <li>Butyl Glycol</li>
                        <li>Mono Ethylene Glycol</li>
                        <li>Perchloroethylene</li>
                        <li>Potassium Chloride</li>
                        <li>Potassium Hydroxide</li>
                        <li>Potassium Permanganate</li>
                    </ul>
                    <ul className=' text-base'>
                        <h1 className='text-xl md:text-2xl font-semibold my-4'>More Product</h1>
                        <li>Methyl Iso Butyl Ketone</li>
                        <li>Ammonium Chloride</li>
                        <li>Ammonium Liquid</li>
                        <li>Aluminum Sulphate</li>
                        <li>Calcium Chloride Flakes</li>
                        <li>Calcium Hypochlorite</li>
                        <li>Calcium Carbide</li>
                        <li>Sodium Hypochlorite</li>
                        <li>Sodium Metasilicate</li>
                        <li>Sodium Silicate</li>
                        <li>Trichloroethylene</li>
                        <li>Sodium Silicate</li>
                        <li>Hypo-Sulphites</li>
                    </ul>
                </div>
            </div>            
        </div>
        <section className='grid md:grid-cols-2 items-center min-h-screen my-auto p-5 md:p-14 bg-[url(/chem11.jpeg)] bg-cover'>
            <div className='text-xl md:text-2xl font-normal grid gap-3'>
                <h1 className='text-2xl md:text-3xl font-bold'>Can't find it?</h1>
                <p className='text-3xl md:text-5xl font-bold'>Do you need something else?</p>
                <p>At CCC we manufacture, pack, and blend Chemical Products for companies and industries across countries and we distribute them across the globe. Extra Services
                You can reach one of Our Staffs or Agents Directly For Assistance.</p>
            </div>
            <div className='flex md:justify-end pr-10'>
                <button className='bg-red-400 hover:bg-red-800 flex p-6 my-6 rounded-xl max-h-8 items-center'>GET IN TOUCH </button>
            </div>
        </section>
    </div>
  )
}

export default Products
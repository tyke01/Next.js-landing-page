import Image from 'next/image';
import React from 'react'

const features = [
  {
    id:1,
    img: "/images/store.png",
    description: "Choose from  a variety of store templates to get started. And customize your store to fit your brand.",
  },
  {
    id:2,
    img: "/images/location.png",
    description: "Track your products and orders with our powerful inventory management system",
  },
  {
    id:3,
    img: "/images/analysis.png",
    description: "Gain valuable insights into your customers and products with your analytics tools",
  },
  {
    id:4,
    img: "/images/shield.png",
    description: "Best in class securuty to protect your data and your customers",
  },
]

const ThirdSection = () => {

  return (
    <section className=' flex p-10 flex-col md:flex-row md:justify-evenly'>
        <div className='flex flex-col lg:flex-row gap-6 md:px-10'>
            <div className='lg:w-2/3 w-full'>
                <video className='rounded-xl' autoPlay muted loop>
                    <source src='/videos/video-3.mp4' type='video/mp4'/>
                </video>
            </div>

            <div className="flex flex-col p-4 rounded-xl lg:w-2/5 border">
              <div className='text-4xl flex justify-center text-center md:text-5xl bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text text-transparent font-semibold'>
                Fully customisable web apps
              </div>

              <div className="md:px-10 space-y-6 flex flex-col items-center justify-center ">
                {features.map((feature) =>(
                  <div key={feature.id}>
                    
                <div className='flex items-start gap-4 pt-10 text-lg'>
                  <Image
                   src={feature.img} 
                   alt="store" 
                   width={50}
                   height={50} 
                  className='object-contain h-20 w-20 items-center justify-center flex md:h-16 md:w-16 md:text-sm mt-2'
                  />
                  <div className='flex flex-col  '>
                    {feature.description}
                  </div>
                  </div>
                  </div>

                ))}
              </div>
            </div>
        </div>
    </section>
  )
}

export default ThirdSection;

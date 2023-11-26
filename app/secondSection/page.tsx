"use client"

import React from 'react';
import Image from 'next/image';

const features = [
    {
        name: "Web design",
        description: "I design and build beautiful web sites for small to medium businesses.",
        image: "/images/features-fullstack.svg",
        alt: "Features"
    },
    {
        name: "Graphic Illustration",
        description: "Transforming ideas into visually stunning illustrations for various projects and industries.",
        image: "/images/features-graphic.png",
        alt: "Features"
    },
    {
        name: "Mobile App Development",
        description: "Crafting cutting-edge mobile applications that deliver superior performance and user satisfaction.",
        image: "/images/features-smartphone.png",
        alt: "Features"
    },
    {
        name: "UI/UX Design",
        description: "Crafting intuitive and visually appealing user interfaces to enhance the overall user experience.",
        image: "/images/features-ui-ux.png",
        alt: "Features"
    },
    {
        name: "Search Engine Optimization",
        description: "Optimizing websites to rank higher on search engines and increase organic traffic.",
        image: "/images/features-seo.png",
        alt: "Features"
    },
    {
        name: "Content Marketing",
        description: "Strategizing and implementing effective content marketing campaigns to boost online presence and engagement.",
        image: "/images/features-content.png",
        alt: "Features"
    }
]

const SecondSection = () => {
  return (
    <section >
        <div className="lg:flex-row flex flex-col items-center justify-center pb-10">
            <div className="p-5 justify-center lg:w-1/3 ">
                <div className=" bg-gradient-to-r from-blue-800 to-green-300 text-transparent bg-clip-text text-4xl md:text-4xl font-bold pb-10">
                    From startup to medium businesses, Victor serves all.
                </div>

                <div className="text-2xl mb-8">
                    Builds for all businesses and communities, Victor is the one you need to grow your platform
                </div>

                <button className='bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600 text-xl font-bold'>
                    Let&apos;s talk
                </button>

            </div>

            <video className="rounded-xl lg:w-2/5 p-4" autoPlay muted loop>
                <source src='/videos/video-2.mp4' type='video/mp4'/>
            </video>

        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
                Services offered
            </div>
            <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 lg:px-40">
                {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transition-transform duration-500 ease-in-out">
                        <div className='text-gray-600 text-3xl font-bold'>
                            <Image
                             src={feature.image} 
                             alt={feature.alt} 
                             width={100} 
                             height={100}
                             className="h-2- w-20 object-contain flex justify-center items-center mb-10"
                            />

                            <div>
                                <div className='text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent font-bold'>
                                    {feature.name}
                                </div>

                                <div className='bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text bg-transparent text-lg'>
                                    {feature.description}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default SecondSection;

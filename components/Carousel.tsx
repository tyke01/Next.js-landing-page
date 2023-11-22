"use client"
import React, {useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";


const images = [
    {
        url: "/images/white-logo.png",
        alt: "logo"
    },
    {
        url: "/images/logo-1.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-2.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-3.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-4.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-5.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-6.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-7.svg",
        alt: "logo"
    },
    {
        url: "/images/logo-8.svg",
        alt: "logo"
    },
]


const Carousel = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => { 
            setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
        }, 5000)

        return () => {
            clearInterval(interval)
        }

    }, []);

  return (
    <div className="w-full">
        <div 
        className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent py-10"
        >
            More than 200+ brands have built their apps through me.
        </div>

        <div className="grid gap-5 grid-cols-3 p-4 md:flex items-center justify-center">
            <AnimatePresence custom={currentImageIndex} >
                {images.map((image, index) => (
                    <motion.div
                     key={index}
                     initial = {{opacity: 0}}
                     animate={{
                        opacity: index === currentImageIndex ? 1 : 0.8,
                        scale: index === currentImageIndex ? 1.2 : 1,
                        transition: {duration: 0.5}
                     }}
                     className="flex items-center justify-center"
                     exit={{opacity: 0}}
                     custom={index}
                     transition={{
                        opacity: {duration: 0.5}
                     }}
                    >
                    <Image
                     src={image.url} 
                     alt={image.alt} 
                     width={80} 
                     height={80} 
                     className="object-contain h-20 w-20 items-center flex mx-0"
                    />
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    </div>
  )

}

export default Carousel;

// ! 10:50..............
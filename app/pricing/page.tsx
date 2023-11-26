

import React from 'react'

const features = [
    {
        name: 'Basic',
        price: '$40/hour',
        fees: '15$ maintainance + 5$ feature adding',
        desc: 'I will work on your app to completion and deploy it. Maintainance and adding features will be charge aside.'
    },
    {
        name: 'Standard',
        price: '$40/hour',
        fees: '15$ maintainance + 5$ feature adding',
        desc: 'I will work on your app to completion and deploy it. Maintainance and adding features will be charge aside.'
    },
    {
        name: 'Premium',
        price: '$40/hour',
        fees: '15$ maintainance + 5$ feature adding',
        desc: 'I will work on your app to completion and deploy it. Maintainance and adding features will be charge aside.'
    },
]

const Pricing = () => {

  return (
    <section className='flex flex-col justify-center items-center'>
        <div className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Pricing
        <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
                Simple and transparent pricing plans for all businesses.
        </div>
        </div>

        <div className='lg:flex md:grid md:grid-cols-2'>
            {features.map((feature) => (
                <div key={feature.name} className='p-4'>
                    <div className='grid justify-center items-center gap-4 border rounded-xl p-4 w-96 h-96'>
                        <div className="text-2xl text-black pb-4">
                            {feature.name}
                        </div>
                        <div className="text-xl">
                            {feature.price}
                        </div>
                        <div className="text-xl">
                            {feature.fees}
                        </div>
                        <div className="text-xl">
                            {feature.desc}
                        </div>

                        <button className="bg-blue-500 text-white p-4 border rounded-xl flex items-center justify-center text-xl hover:bg-blue-700">
                            Get started
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Pricing;

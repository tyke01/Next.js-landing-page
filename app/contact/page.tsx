import React from 'react'

const ContactSection = () => {
  return (
    <section className='md:py-20 p-10'>
      <div className="border lg:w-2/3 mx-auto rounded-xl p-4">
        <div className='text-4xl font-bold mb-5'>
          Start building your web application today.
        </div>

        <div>
          Curious about how to start? Contact me to learn more about making beautiful web applications
        </div>

        <button className='bg-blue-500 px-6 py-3 text-white rounded-xl text-xl hover:text-blue-700 lg:w-1/4 mt-5'>
          Contact me
        </button>
        
      </div>
    </section>
  )
}

export default ContactSection;
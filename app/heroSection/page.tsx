

const HeroPage = () => {
  return (
    <section className="md:py-20 bg-gradient-to-tr from-gray-100 to-gray-200 space-y-10 w-full">
        <div className="container m-auto text-center">
            <div className="flex text-6xl justify-center font-bold md:px-20 pb-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
                Build a brand and start selling in seconds
            </div>

            <p className="text-lg md:text-xl mb-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">
                No matter what you sell, Victor&apos;s got you covered
            </p>

            <div className="flex gap-4 justify-center pt-10">
                <button className="bg-blue-500 text-white px-10 py-4 rounded-md">
                    Get started
                </button>

                <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
                    Learn more
                </button>
            </div>

            <div className=" pt-10">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/videos/video-1.mp4" type="video/mp4"/>
                </video>
            </div>

        </div>
    </section>
  )
}

export default HeroPage;

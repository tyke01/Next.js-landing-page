

const ForthSection = () => {
  return (
    <section className="flex flex-col justify-center items-center md:py-10">
        <div className="text-center md:text-6xl text-4xl bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text text-transparent font-bold pb-10">
            Content management system. Made simple.
        </div>

        <div className="flex justify-center items-center md:pt-10 px-10">
            <video className="rounded-xl lg:w-2/3 " autoPlay muted loop>
                <source src="/videos/video-1.mp4" type="video/mp4" />
            </video>
        </div>

    </section>
  )
}

export default ForthSection
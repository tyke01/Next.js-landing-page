import Image from "next/image"

const Logo = () => {
  return (
    <div>
        <Image
         src="/images/white-logo.png" 
         alt="logo" 
         width={60} 
         height={60} />
    </div>
  )
}

export default Logo
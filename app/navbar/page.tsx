import ActionButtons from "./ActionButtons"
import Logo from "./Logo"
import NavigationBar from "./NavigationBar"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 border-b h-20 lg:h-24">
        <Logo />

        <NavigationBar />

        <ActionButtons />
    </nav>
  )
}

export default Navbar
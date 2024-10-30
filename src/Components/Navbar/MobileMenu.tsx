import MenuItems from "./MenuItems"

const MobileMenu = () => {
  return (
    <div className="lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center">
<MenuItems isMobile />
    </div>
  )
}

export default MobileMenu
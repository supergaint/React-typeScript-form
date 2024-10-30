interface MenuItemsProps {
    isMobile?: boolean;
  }
  
  const MenuItems: React.FC<MenuItemsProps> = ({ isMobile = false }) => {
    const menuClass = isMobile
      ? "flex flex-col items-center space-y-4 py-4"
      : "hidden lg:flex flex-row justify-around space-x-6";
  
    const menuItems = [
      { label: "HOME", href: "#" },
      { label: "ABOUT", href: "#" },
      { label: "CONTACT", href: "#" },
    ];
  
    return (
      <ul className={`${menuClass} font-semibold text-[16px]`}>
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="hover:text-blue-300">
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default MenuItems;
  
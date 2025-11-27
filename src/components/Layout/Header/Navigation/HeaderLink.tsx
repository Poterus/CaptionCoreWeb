"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const specialLabels = ['Contact', 'Home', 'About Us']
  const isSpecial = specialLabels.includes(item.label)
  const isActive = path === item.href || path.startsWith(`/${item.label.toLowerCase()}`)
  const isSpecialActive = isSpecial && isActive
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className={`relative ${item.label === "Faqs" ? 'xl:block lg:hidden block' : null}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`py-3 text-base flex font-bold
          ${isSpecial
            ? 'hover:text-darkmode dark:hover:text-darkmode'
            : 'hover:text-LightApricot dark:hover:text-LightApricot dark:hover:text-primary'}
          ${!isSpecial && isActive ? 'text-LightApricot dark:text-LightApricot' : ' text-white dark:text-white '}
          ${!isSpecial && isActive ? 'text-LightApricot! dark:text-LightApricot' : ''}
          ${isSpecialActive ? 'font-semibold relative after:block after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-LightApricot' : ''}`.replace(/\s+/g, ' ')}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div className="absolute py-2 top-8 left-0 mt-0.5 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg">
          {item.submenu?.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block px-4 py-2 text-black dark:text-white hover:bg-AliceBlue dark:hover:bg-darklight ${path === subItem.href ? "bg-primary text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white" : ''}`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;

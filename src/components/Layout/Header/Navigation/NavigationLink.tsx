"use client";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const NavigationLink: React.FC<{
  item: HeaderItem;
  isMobile?: boolean;
  onClick?: () => void;
}> = ({ item, isMobile, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleLinkClick = (href: string) => {
    if (item.submenu) {
      handleToggle();
      return;
    }
    if (href.includes('#')) {
      const hash = '#' + href.split('#')[1];
      setActiveHash(hash);
    } else {
      setActiveHash('');
    }
    if (onClick) onClick();
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return path === '/' && activeHash === href.replace('/', '');
    }
    return path === href;
  };

  if (isMobile) {
    return (
      <div className="relative w-full">
        <div
          onClick={() => handleLinkClick(item.href)}
          className={`text-base flex items-center justify-between w-full py-2 transition-all duration-300 focus:outline-hidden hover:text-primary ${
            isActive(item.href) ? "text-primary font-semibold" : "text-muted"
          }`}
        >
          <Link href={item.href}>{item.label}</Link>
          {item.submenu && (
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                submenuOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {submenuOpen && item.submenu && (
          <div className="bg-primary/5 p-2 w-full rounded-lg mt-1 space-y-1">
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                onClick={() => handleLinkClick(subItem.href)}
                className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                  isActive(subItem.href)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => item.submenu && setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        onClick={() => handleLinkClick(item.href)}
        className={`text-17 relative flex font-medium transition-all duration-300 hover:text-primary capitalized ${
          isActive(item.href) ? "text-primary" : "text-muted"
        }`}
      >
        {item.label}
        {item.submenu && (
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              submenuOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 w-60 bg-white dark:text-white shadow-lg rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 transition-all duration-300 ${
                isActive(subItem.href)
                  ? "bg-primary/10 text-primary"
                  : "text-black dark:text-white hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationLink;

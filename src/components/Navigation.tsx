import { useState } from "react";
import { Menu } from "lucide-react";
import logo from '../assets/images/logo/logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [{
    name: "Home",
    to: "hero"
  }, {
    name: "About",
    to: "about"
  }, {
    name: "Certifications",
    to: "certifications"
  }, {
    name: "Products",
    to: "products"
  }, {
    name: "Contact",
    to: "contact"
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <img
                src={logo}
                alt="Ghame Spice Logo"
                className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-orange-800">
              Ghame Spice
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => <button key={item.to} onClick={() => scrollToSection(item.to)} className="text-gray-700 hover:text-orange-600 cursor-pointer">
                {item.name}
              </button>)}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-600">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {menuItems.map(item => <button key={item.to} onClick={() => scrollToSection(item.to)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 cursor-pointer">
                {item.name}
              </button>)}
          </div>
        </div>}
    </nav>;
};
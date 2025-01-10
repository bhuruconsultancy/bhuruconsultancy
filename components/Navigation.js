'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, Briefcase, Plane, Users, MessageSquare } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { href: '/about', label: 'About Us', icon: <Users className="w-4 h-4" /> },
    { href: '/study-abroad', label: 'Study Abroad', icon: <GraduationCap className="w-4 h-4" /> },
    { href: '/consultancy-services', label: 'Consultancy Services', icon: <Briefcase className="w-4 h-4" /> },
    { href: '/holidays', label: 'Holidays & Travels', icon: <Plane className="w-4 h-4" /> },
    { href: '/testimonials', label: 'Testimonials', icon: <MessageSquare className="w-4 h-4" /> },
    { href: '/team', label: 'Our Team', icon: <Users className="w-4 h-4" /> },
    { href: '/enquire', label: 'Enquire', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-[2000px] mx-auto px-2 sm:px-4">
        {/* Desktop Navigation */}
        <div className="flex justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="images/bhuru-logo.png"
                alt="Bhuru Consultancy"
                className="w-[120px] h-[60px] lg:w-[160px] lg:h-[80px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-3 xl:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 text-xs xl:text-sm whitespace-nowrap transition-colors ${
                    pathname === item.href
                      ? 'text-[#8B1818] font-semibold border-b-2 border-[#8B1818]'
                      : 'text-gray-700 hover:text-[#8B1818]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#8B1818]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      {isOpen && (
        <div className="lg:hidden" ref={mobileMenuRef}>
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-base ${
                  pathname === item.href
                    ? 'text-[#8B1818] bg-gray-50 font-semibold'
                    : 'text-gray-700 hover:text-[#8B1818] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
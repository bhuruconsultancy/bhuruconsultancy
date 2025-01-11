'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { href: '/about', label: 'About Us', icon: <Users className="w-5 h-5" /> },
    { href: '/study-abroad', label: 'Study Abroad', icon: <GraduationCap className="w-5 h-5" /> },
    { href: '/consultancy-services', label: 'Consultancy Services', icon: <Briefcase className="w-5 h-5" /> },
    { href: '/holidays', label: 'Holidays & Travels', icon: <Plane className="w-5 h-5" /> },
    { href: '/testimonials', label: 'Testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { href: '/team', label: 'Our Team', icon: <Users className="w-5 h-5" /> },
    { href: '/enquire', label: 'Enquire', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-[200px] h-[100px]">
                <Image
                  src="/images/bhuru logo.png"
                  alt="Bhuru Consultancy"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Updated font sizes for larger screens */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-8 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 text-xs lg:text-sm xl:text-[13px] whitespace-nowrap transition-colors ${
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

          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#8B1818]"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
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
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-lg ${
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
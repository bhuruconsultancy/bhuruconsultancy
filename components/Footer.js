'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/study-abroad', label: 'Study Abroad' },
    { href: '/consultancy-services', label: 'Consultancy Services' },
    { href: '/holidays', label: 'Holidays & Travels' },
    { href: '/team', label: 'Our Team' },
    { href: '/enquire', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-[#1B4965] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Bhuru Consultancy and Agency</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your trusted partner in education and professional development. Transforming lives through quality guidance and support.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-lg hover:text-[#E85D5D] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#E85D5D]" />
                <a href="mailto:info@bhuruconsultancy.co.zw" className="text-lg hover:text-[#E85D5D] transition-colors">
                  info@bhuruconsultancy.co.zw
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-[#E85D5D]" />
                <a href="tel:+447873204133" className="text-lg hover:text-[#E85D5D] transition-colors">
                  +44 7873 204 133
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-[#E85D5D]" />
                <span className="text-lg">6141 Westview, Karoi, Zimbabwe</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-semibold mb-6">Follow Us</h4>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-[#E85D5D] transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-[#E85D5D] transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-[#E85D5D] transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-[#E85D5D] transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-[#E85D5D] transition-colors">
                <Youtube className="w-8 h-8" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-xl font-semibold mb-4">Newsletter</h5>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg text-gray-900 w-full text-lg"
                />
                <button className="bg-[#E85D5D] px-8 py-3 rounded-lg hover:bg-[#8B1818] transition-colors text-lg w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-lg">&copy; {new Date().getFullYear()} Bhuru Consultancy and Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
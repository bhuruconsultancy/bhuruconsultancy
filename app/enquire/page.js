'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Enquire() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: "info@bhuruconsultancy.co.zw",
      link: "mailto:info@bhuruconsultancy.co.zw"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: "+44 7873 204 133",
      link: "tel:+447873204133"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Address",
      details: "6141 Westview, Karoi, Zimbabwe",
      link: "#"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
          alt="Contact Us"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              We're here to help you achieve your goals
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center card-hover">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-[#8B1818] bg-opacity-10">
                      <div className="text-[#8B1818]">{info.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-[#8B1818] transition-colors text-lg inline-block"
                  >
                    {info.details}
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="p-8 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 text-lg transition-all duration-200 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1818] focus:border-[#8B1818] hover:border-[#8B1818]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 text-lg transition-all duration-200 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1818] focus:border-[#8B1818] hover:border-[#8B1818]"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full h-12 text-lg transition-all duration-200 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1818] focus:border-[#8B1818] hover:border-[#8B1818]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] text-lg transition-all duration-200 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1818] focus:border-[#8B1818] hover:border-[#8B1818] resize-y"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B1818] hover:bg-[#E85D5D] text-white text-lg h-14 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
}
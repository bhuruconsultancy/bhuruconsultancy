'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, GraduationCap, Briefcase, Plane, UserCircle2 } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Future by Studying Abroad",
      description: "Open doors to world-class education opportunities across the globe",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
      link: "/study-abroad"
    },
    {
      title: "Professional Consultation Services",
      description: "Expert guidance for your career and educational journey",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070",
      link: "/consultancy-services"
    },
    {
      title: "Explore Dream Destinations",
      description: "Plan your perfect holiday with our travel expertise",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
      link: "/holidays"
    }
  ];

  const services = [
    {
      title: "Study Abroad",
      description: "Comprehensive guidance for international education opportunities in Zambia, Poland, China, Mauritius and more",
      icon: <GraduationCap className="w-8 h-8 text-[#8B1818] mb-4" />,
      link: "/study-abroad"
    },
    {
      title: "Consultancy Services",
      description: "Professional career development, resume writing, and online tutoring in various subjects",
      icon: <Briefcase className="w-8 h-8 text-[#8B1818] mb-4" />,
      link: "/consultancy-services"
    },
    {
      title: "Travel Services",
      description: "Expert travel planning, holiday packages, and visa assistance for your dream destinations",
      icon: <Plane className="w-8 h-8 text-[#8B1818] mb-4" />,
      link: "/holidays"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Carousel */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 flex h-full transition-transform duration-1000 ease-out"
          style={{ 
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(currentSlide * (100 / slides.length))}%)`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full"
              style={{ width: `${100 / slides.length}%` }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-2xl">
                    <motion.h1
                      key={`${currentSlide}-title`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl font-bold mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      key={`${currentSlide}-desc`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-xl mb-8"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      key={`${currentSlide}-button`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link href={slide.link}>
                        <Button
                          className="bg-[#8B1818] hover:bg-[#E85D5D] text-white"
                          size="lg"
                        >
                          Get Started
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow card-hover">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button 
                      variant="outline" 
                      className="text-[#8B1818] border-[#8B1818] hover:bg-[#8B1818] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tafadzwa Chapuredima",
                role: "Law Student",
                text: "Bhuru Consultancy and Agency have helped in securing my Bachelor of Laws at University of Lusaka and they further assisted me in getting accommodation"
              },
              {
                name: "Mrs Mutowo",
                role: "Parent",
                text: "Thank you for handling my daughter from application till her travels"
              },
              {
                name: "Taremekedzwa Gurira",
                role: "Medical Professional",
                text: "Thank you Bhuru Consultancy for securing my postgraduate program in MSc in Sports Physiotherapy"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <UserCircle2 className="w-16 h-16 text-[#8B1818]" />
                  </div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B1818] to-[#E85D5D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your educational and professional goals
          </p>
          <Link href="/enquire">
            <Button
              size="lg"
              className="bg-white text-[#8B1818] hover:bg-gray-100 hover-lift"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
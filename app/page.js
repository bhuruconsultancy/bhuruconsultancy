'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, GraduationCap, Briefcase, Plane, UserCircle2 } from 'lucide-react';

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Future by Studying Abroad",
      description: "Open doors to world-class education opportunities across the globe",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
    },
    {
      title: "Professional Consultation Services",
      description: "Expert guidance for your career and educational journey",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070"
    },
    {
      title: "Explore Dream Destinations",
      description: "Plan your perfect holiday with our travel expertise",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="pt-16">
      {/* Hero Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <Button
                    className="bg-[#8B1818] hover:bg-[#E85D5D] text-white"
                    size="lg"
                    onClick={() => window.location.href = '/enquire'}
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                  <Button 
                    variant="outline" 
                    className="text-[#8B1818] border-[#8B1818] hover:bg-[#8B1818] hover:text-white"
                    onClick={() => window.location.href = service.link}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B1818] to-[#E85D5D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your educational and professional goals
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8B1818] hover:bg-gray-100 hover-lift"
            onClick={() => window.location.href = '/enquire'}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Study Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="relative h-[300px] overflow-hidden card-hover">
              <Image
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067"
                alt="Zambia"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Study in Zambia</h3>
                <p className="text-white mb-4">Discover educational opportunities in Zambia</p>
                <Button 
                  className="bg-white text-[#8B1818] hover:bg-gray-100 w-fit"
                  onClick={() => window.location.href = '/study-abroad'}
                >
                  Learn More
                </Button>
              </div>
            </Card>
            <Card className="relative h-[300px] overflow-hidden card-hover">
              <Image
                src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2069"
                alt="Poland"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Study in Poland</h3>
                <p className="text-white mb-4">Explore academic excellence in Poland</p>
                <Button 
                  className="bg-white text-[#8B1818] hover:bg-gray-100 w-fit"
                  onClick={() => window.location.href = '/study-abroad'}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
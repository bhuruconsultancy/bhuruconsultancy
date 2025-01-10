'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, BookOpen, Briefcase, Globe, Palette, Building } from 'lucide-react';

export default function ConsultancyServices() {
  const services = [
    {
      title: "Career and Immigration Services",
      description: "Comprehensive career and immigration support",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
      features: [
        "Visa and Study Permit Applications",
        "Job Interview Preparation",
        "Talent Acquisition Services",
        "Immigration Consultation",
        "Career Path Planning"
      ]
    },
    {
      title: "Professional Writing Services",
      description: "Expert writing and academic support services",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073",
      features: [
        "Resume/CVs writing",
        "Assignments Assistance",
        "Dissertation Support",
        "Professional Reports",
        "Business Plan Development"
      ]
    },
    {
      title: "Online Teachers/Classes",
      description: "Expert tutoring and classes across various subjects",
      image: "https://images.unsplash.com/photo-1526253038957-bce54e05968e?q=80&w=2070",
      features: [
        "Core Subjects (Maths, English, Science)",
        "Advanced Sciences (Chemistry, Physics)",
        "Business Studies (Accounts)",
        "Healthcare (Health and Social Care)",
        "Language Proficiency (IELTS, OET)",
        "Higher Education Support"
      ]
    },
    {
      title: "Digital and Branding Solutions",
      description: "Complete digital presence and brand management",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
      features: [
        "Web Design Services",
        "Social Media Management",
        "Brand Management",
        "Content Creation",
        "Logo and Visual Identity Design"
      ]
    },
    {
      title: "Business Setup Services",
      description: "Comprehensive business establishment and management support",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070",
      features: [
        "Company and Tax Registration",
        "Business Consultation",
        "Market Research",
        "Trademark Registration",
        "Financial Planning"
      ]
    }
  ];

  const handleEnquire = (service) => {
    window.location.href = `/enquire?subject=${encodeURIComponent(`Enquiry about ${service}`)}`;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
          alt="Consultancy Services"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Consultancy Services</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Expert guidance for your professional journey
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                    <div className="flex-grow">
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-lg text-gray-600">
                            <CheckCircle className="w-5 h-5 text-[#8B1818] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="mt-6 bg-[#8B1818] hover:bg-[#E85D5D] text-white text-lg w-full"
                      onClick={() => handleEnquire(service.title)}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B1818] to-[#E85D5D] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Advance Your Career?</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your professional goals
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8B1818] hover:bg-gray-100 text-xl py-6"
            onClick={() => handleEnquire('Professional Consultation')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
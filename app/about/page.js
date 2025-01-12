'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function About() {
  const missionVision = [
    {
      title: "Our Mission",
      description: "To empower individuals through exceptional educational and professional guidance, creating pathways to global opportunities."
    },
    {
      title: "Our Vision",
      description: "To be the leading consultancy firm, recognized globally for transforming lives through quality education and career development."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethics"
    },
    {
      title: "Innovation",
      description: "We continuously evolve to meet changing global needs"
    },
    {
      title: "Student-Centric",
      description: "We put our clients' success at the heart of everything we do"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="About Us"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">About Us</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Your trusted partner in educational and professional development
            </p>
          </div>
        </div>
      </div>

      {/* Registration Info */}
      <section className="py-12 bg-[#8B1818] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl">
            We are proudly registered in Zimbabwe and fully tax compliant, ensuring reliable and trustworthy services for all our clients.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <h2 className="text-3xl font-bold mb-4 gradient-text">{item.title}</h2>
                  <p className="text-xl text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full card-hover">
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Journey</h2>
              <p className="text-xl text-gray-600 mb-6">
                Since our establishment, Bhuru Consultancy and Agency has been dedicated to helping students and professionals achieve their dreams through quality education and career guidance.
              </p>
              <p className="text-xl text-gray-600">
                With years of experience in international education consulting, we have successfully guided thousands of students to prestigious institutions worldwide and helped countless professionals advance their careers.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                alt="Our Journey"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
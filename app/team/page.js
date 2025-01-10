'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LinkedIn, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069",
      description: "With over 15 years of experience in international education consulting, John leads our team with vision and expertise."
    },
    {
      name: "Sarah Johnson",
      role: "Education Consultant",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
      description: "Specializing in international education with a focus on European universities."
    },
    {
      name: "Michael Chen",
      role: "Career Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070",
      description: "Expert in professional development and career transition strategies."
    },
    {
      name: "Emily Davis",
      role: "Visa Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      description: "Dedicated to helping students navigate visa processes successfully."
    },
    {
      name: "David Wilson",
      role: "Travel Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
      description: "Creating memorable travel experiences with extensive destination knowledge."
    },
    {
      name: "Lisa Zhang",
      role: "Education Consultant",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
      description: "Specializing in Asian education systems and cultural exchange programs."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="Our Team"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Our Team</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Meet the experts behind Bhuru Consultancy
            </p>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px]">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-4 gradient-text">{teamMembers[0].name}</h2>
                  <p className="text-2xl text-gray-600 mb-4">{teamMembers[0].role}</p>
                  <p className="text-lg text-gray-600 mb-6">{teamMembers[0].description}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                      <LinkedIn className="w-8 h-8" />
                    </a>
                    <a href="mailto:info@bhuruconsultancy.co.zw" className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                      <Mail className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Card className="overflow-hidden card-hover">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg text-[#8B1818] mb-4">{member.role}</p>
                    <p className="text-gray-600 text-lg">{member.description}</p>
                    <div className="mt-4 flex space-x-4">
                      <a href="#" className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                        <LinkedIn className="w-6 h-6" />
                      </a>
                      <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@bhuruconsultancy.co.zw`} className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
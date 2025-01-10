'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Linkedin, Mail, UserCircle2 } from 'lucide-react';

export default function Team() {
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
                <div className="flex justify-center items-center">
                  <UserCircle2 className="w-64 h-64 text-[#8B1818]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2 gradient-text">Tendai Kufa</h2>
                  <p className="text-xl text-[#8B1818] mb-6">Chief Executive Officer</p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    With extensive experience in international education consulting, our CEO leads with vision and expertise, 
                    focusing on expanding global educational opportunities and ensuring excellence in all our services.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                      <Linkedin className="w-8 h-8" />
                    </a>
                    <a href="mailto:tendai.kufa@bhuruconsultancy.co.zw" className="text-[#8B1818] hover:text-[#E85D5D] transition-colors">
                      <Mail className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 gradient-text">Our Growing Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Bhuru Consultancy, we are proud to have a dedicated team of over 15 professionals, 
            including education consultants, visa specialists, career advisors, and travel experts. 
            Our diverse team works together to provide comprehensive support and guidance to all our clients.
          </p>
        </div>
      </section>
    </div>
  );
}
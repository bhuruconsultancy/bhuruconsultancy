'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { UserCircle2, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Tafadzwa Chapuredima",
      role: "Law Student",
      text: "Bhuru Consultancy and Agency have helped in securing my Bachelor of Laws at University of Lusaka and they further assisted me in getting accommodation"
    },
    {
      name: "Tinotenda Marufu",
      role: "International Student",
      text: "Wow finally my cousin has made it to Poland. Makaita basa Bhuru Consultancy and Agency"
    },
    {
      name: "Mrs Mutowo",
      role: "Parent",
      text: "Thank you for handling my daughter from application till her travels"
    },
    {
      name: "Dakarai Guti",
      role: "Student",
      text: "Offers high quality service and has the best package of universities around the globe"
    },
    {
      name: "Taremekedzwa Gurira",
      role: "Medical Professional",
      text: "Thank you Bhuru Consultancy for securing my postgraduate program in MSc in Sports Physiotherapy"
    },
    {
      name: "Theophilus Chinoshava",
      role: "Student",
      text: "Ka process kenyu kari so fast and simple"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
          alt="Testimonials"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Hear what our clients say about their experience with us
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col card-hover">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="mb-6">
                      <UserCircle2 className="w-20 h-20 text-[#8B1818]" />
                    </div>
                    <Quote className="w-8 h-8 text-[#E85D5D] mb-4" />
                    <p className="text-lg text-gray-600 italic mb-6 flex-grow">"{testimonial.text}"</p>
                    <div>
                      <h4 className="text-xl font-semibold text-[#8B1818]">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
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
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us help you achieve your goals
          </p>
          <button
            onClick={() => window.location.href = '/enquire'}
            className="bg-white text-[#8B1818] hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
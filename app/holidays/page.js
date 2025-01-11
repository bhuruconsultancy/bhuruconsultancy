'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, MapPin, Calendar, Users, CheckCircle } from 'lucide-react';

export default function Holidays() {
  const router = useRouter();

  const destinations = [
    {
      title: "Explore Zambia",
      description: "Experience the natural wonders of Victoria Falls and wildlife safaris",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
      duration: "7-14 days",
      highlights: ["Victoria Falls", "Safari Tours", "Cultural Experiences"]
    },
    {
      title: "Discover Poland",
      description: "Journey through historic cities and stunning landscapes",
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2069",
      duration: "10-15 days",
      highlights: ["Historic Cities", "Cultural Tours", "Local Cuisine"]
    },
    {
      title: "European Adventure",
      description: "Multi-city tours across Europe's most beautiful destinations",
      image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070",
      duration: "14-21 days",
      highlights: ["Multiple Countries", "Guided Tours", "Cultural Experiences"]
    },
    {
      title: "Asian Experience",
      description: "Explore the diverse cultures and landscapes of Asia",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070",
      duration: "10-20 days",
      highlights: ["Cultural Tours", "Local Experiences", "Scenic Beauty"]
    }
  ];

  const services = [
    {
      icon: <Plane className="w-10 h-10 text-[#8B1818]" />,
      title: "Flight Booking",
      description: "Best deals on international flights"
    },
    {
      icon: <MapPin className="w-10 h-10 text-[#8B1818]" />,
      title: "Tour Planning",
      description: "Customized itineraries for your perfect trip"
    },
    {
      icon: <Calendar className="w-10 h-10 text-[#8B1818]" />,
      title: "Holiday Packages",
      description: "All-inclusive vacation packages"
    },
    {
      icon: <Users className="w-10 h-10 text-[#8B1818]" />,
      title: "Group Tours",
      description: "Organized group travel experiences"
    }
  ];

  const handleEnquire = (destination) => {
    router.push(`/enquire?subject=${encodeURIComponent(`Travel Enquiry - ${destination}`)}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021"
          alt="Holidays & Travel"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Holidays & Travel</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Discover the world with our expertly crafted travel experiences
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Our Travel Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="p-6 text-center h-full flex flex-col card-hover">
                  <div className="flex-grow flex flex-col items-center justify-between">
                    <div>
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    </div>
                    <Button 
                      className="bg-[#8B1818] hover:bg-[#E85D5D] text-white text-lg w-full"
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

      {/* Destinations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col card-hover">
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold mb-2">{destination.title}</h3>
                      <p className="text-xl text-gray-600 mb-4">{destination.description}</p>
                      <div className="mb-4">
                        <span className="text-lg font-semibold text-[#8B1818]">
                          Duration: {destination.duration}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {destination.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-lg text-gray-600">
                            <CheckCircle className="w-5 h-5 text-[#8B1818] mr-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="mt-6 bg-[#8B1818] hover:bg-[#E85D5D] text-white text-lg w-full"
                      onClick={() => handleEnquire(destination.title)}
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
          <h2 className="text-5xl font-bold mb-8">Ready to Start Your Adventure?</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect holiday
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8B1818] hover:bg-gray-100 text-xl py-6"
            onClick={() => handleEnquire('General Travel Enquiry')}
          >
            Plan Your Trip
          </Button>
        </div>
      </section>
    </div>
  );
}
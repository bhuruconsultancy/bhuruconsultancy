'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';

export default function StudyAbroad() {
  const router = useRouter();

  const countries = [
    {
      name: "China",
      description: "Study in one of the world's fastest-growing economies with rich cultural heritage",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070",
      requirements: {
        undergraduate: [
          "High school certificates",
          "English proficiency (IELTS/TOEFL)",
          "HSK (Chinese proficiency) recommended",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        masters: [
          "Bachelor's degree certificate",
          "Academic transcripts",
          "English proficiency (IELTS/TOEFL)",
          "HSK (Chinese proficiency) recommended",
          "Research proposal",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        phd: [
          "Master's degree certificate",
          "Academic transcripts",
          "English proficiency (IELTS/TOEFL)",
          "HSK (Chinese proficiency) required",
          "Detailed research proposal",
          "Publications (if any)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ]
      }
    },
    {
      name: "Mauritius",
      description: "Experience world-class education in a tropical paradise",
      image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070",
      requirements: {
        undergraduate: [
          "High school certificates",
          "English proficiency",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        masters: [
          "Bachelor's degree certificate",
          "Academic transcripts",
          "English proficiency",
          "Research proposal (if applicable)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        phd: [
          "Master's degree certificate",
          "Academic transcripts",
          "English proficiency",
          "Detailed research proposal",
          "Publications (if any)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ]
      }
    },
    {
      name: "Zambia",
      description: "Quality education in the heart of Africa",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2067",
      requirements: {
        undergraduate: [
          "High school certificates",
          "English proficiency",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        masters: [
          "Bachelor's degree certificate",
          "Academic transcripts",
          "English proficiency",
          "Research proposal (if applicable)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        phd: [
          "Master's degree certificate",
          "Academic transcripts",
          "English proficiency",
          "Detailed research proposal",
          "Publications (if any)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ]
      }
    },
    {
      name: "Poland",
      description: "Study in one of Europe's most dynamic educational hubs",
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2069",
      requirements: {
        undergraduate: [
          "High school certificates",
          "English/Polish proficiency",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        masters: [
          "Bachelor's degree certificate",
          "Academic transcripts",
          "English/Polish proficiency",
          "Research proposal (if applicable)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ],
        phd: [
          "Master's degree certificate",
          "Academic transcripts",
          "English/Polish proficiency",
          "Detailed research proposal",
          "Publications (if any)",
          "Free visa assistance",
          "Agency fee $200",
          "Optional: Airport pick up"
        ]
      }
    }
  ];

  const handleEnquire = (country, level) => {
    router.push(`/enquire?subject=${encodeURIComponent(`Study in ${country} - ${level}`)}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Study Abroad"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Study Abroad</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Your gateway to international education and opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-[300px] md:h-auto">
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-span-2 p-8">
                      <h3 className="text-3xl font-bold mb-4">{country.name}</h3>
                      <p className="text-xl text-gray-600 mb-8">{country.description}</p>

                      <Tabs defaultValue="undergraduate" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                          <TabsTrigger 
                            value="undergraduate"
                            className="text-lg data-[state=active]:bg-[#8B1818] data-[state=active]:text-white"
                          >
                            Undergraduate
                          </TabsTrigger>
                          <TabsTrigger 
                            value="masters"
                            className="text-lg data-[state=active]:bg-[#8B1818] data-[state=active]:text-white"
                          >
                            Masters
                          </TabsTrigger>
                          <TabsTrigger 
                            value="phd"
                            className="text-lg data-[state=active]:bg-[#8B1818] data-[state=active]:text-white"
                          >
                            PhD
                          </TabsTrigger>
                        </TabsList>

                        {['undergraduate', 'masters', 'phd'].map((level) => (
                          <TabsContent key={level} value={level} className="mt-0">
                            <Card className="p-6">
                              <h4 className="text-xl font-semibold mb-4">Requirements</h4>
                              <ul className="space-y-3">
                                {country.requirements[level].map((req, i) => (
                                  <li key={i} className="flex items-center text-lg">
                                    <CheckCircle className="w-5 h-5 text-[#8B1818] mr-2" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                              <Button
                                className="mt-6 bg-[#8B1818] hover:bg-[#E85D5D] text-white text-lg"
                                onClick={() => handleEnquire(country.name, level.charAt(0).toUpperCase() + level.slice(1))}
                              >
                                Enquire Now
                              </Button>
                            </Card>
                          </TabsContent>
                        ))}
                      </Tabs>
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
          <h2 className="text-5xl font-bold mb-8">Ready to Start Your Educational Journey?</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your study abroad options
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8B1818] hover:bg-gray-100 text-xl py-6"
            onClick={() => handleEnquire('General', 'Study Abroad')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
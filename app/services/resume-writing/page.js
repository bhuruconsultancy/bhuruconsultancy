'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ResumeWriting() {
  const features = [
    "Professional ATS-optimized format",
    "Industry-specific keywords",
    "Achievement-focused content",
    "Cover letter writing",
    "LinkedIn profile optimization",
    "Multiple revisions included"
  ];

  const packages = [
    {
      name: "Basic",
      price: "$99",
      features: ["Resume Writing", "ATS Optimization", "1 Revision"]
    },
    {
      name: "Professional",
      price: "$199",
      features: ["Resume Writing", "Cover Letter", "LinkedIn Profile", "2 Revisions"]
    },
    {
      name: "Executive",
      price: "$299",
      features: ["Resume Writing", "Cover Letter", "LinkedIn Profile", "Unlimited Revisions", "Career Coaching Session"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070"
          alt="Resume Writing Services"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Professional Resume Writing</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Stand out from the competition with our expert resume writing services
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Resume Writing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#8B1818] flex-shrink-0" />
                <p className="text-gray-600">{feature}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-4xl font-bold text-[#8B1818] mb-6">{pkg.price}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#8B1818] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#8B1818] hover:bg-[#E85D5D] text-white">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
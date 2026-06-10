import React from 'react';
import { Shield, Tag, Headphones, Award } from 'lucide-react';
import { features } from '../mockData';

const iconMap = {
  Shield: Shield,
  Tag: Tag,
  Headphones: Headphones,
  Award: Award
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Fantasy World Holidays?
          </h2>
          <p className="text-lg text-gray-600">
            Your trusted travel partner for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

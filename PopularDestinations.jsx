import React from 'react';
import { Card, CardContent } from './ui/card';
import { popularDestinations } from '../mockData';
import { MapPin } from 'lucide-react';

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Explore the world's most sought-after travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <h3 className="font-bold text-xl">{destination.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-2">{destination.description}</p>
                  <p className="text-white font-bold text-lg">{destination.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;

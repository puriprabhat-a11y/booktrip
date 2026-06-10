import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { holidayPackages } from '../mockData';
import { Clock, MapPin, Check } from 'lucide-react';

const HolidayPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Holiday Packages
          </h2>
          <p className="text-lg text-gray-600">
            Handpicked packages for your perfect vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {holidayPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
                    <p className="text-xs text-gray-600">per person</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <h3 className="font-bold text-xl text-gray-900">{pkg.destination}</h3>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <p className="text-sm">{pkg.duration}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-gray-700">Inclusions:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 mr-1 text-green-500" />
                        {inclusion}
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayPackages;

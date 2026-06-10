import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { offers } from '../mockData';
import { Tag, Clock } from 'lucide-react';

const OffersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Offers & Deals
          </h2>
          <p className="text-lg text-gray-600">
            Save more on your next trip with our special offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white font-bold px-3 py-1">
                    <Tag className="h-3 w-3 mr-1" />
                    OFFER
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 font-mono">
                    {offer.code}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {offer.validTill}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

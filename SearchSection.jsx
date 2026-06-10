import React, { useState } from 'react';
import { Plane, Hotel, Train, Bus, Palmtree } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import FlightSearch from './search/FlightSearch';
import HotelSearch from './search/HotelSearch';
import TrainSearch from './search/TrainSearch';
import BusSearch from './search/BusSearch';
import HolidaySearch from './search/HolidaySearch';

const SearchSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where do you want to go?
          </h2>
          <p className="text-lg text-gray-600">
            Search flights, hotels, trains, buses, and holiday packages
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="flights" className="flex items-center space-x-2">
                <Plane className="h-4 w-4" />
                <span className="hidden sm:inline">Flights</span>
              </TabsTrigger>
              <TabsTrigger value="hotels" className="flex items-center space-x-2">
                <Hotel className="h-4 w-4" />
                <span className="hidden sm:inline">Hotels</span>
              </TabsTrigger>
              <TabsTrigger value="trains" className="flex items-center space-x-2">
                <Train className="h-4 w-4" />
                <span className="hidden sm:inline">Trains</span>
              </TabsTrigger>
              <TabsTrigger value="buses" className="flex items-center space-x-2">
                <Bus className="h-4 w-4" />
                <span className="hidden sm:inline">Buses</span>
              </TabsTrigger>
              <TabsTrigger value="holidays" className="flex items-center space-x-2">
                <Palmtree className="h-4 w-4" />
                <span className="hidden sm:inline">Holidays</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flights">
              <FlightSearch />
            </TabsContent>

            <TabsContent value="hotels">
              <HotelSearch />
            </TabsContent>

            <TabsContent value="trains">
              <TrainSearch />
            </TabsContent>

            <TabsContent value="buses">
              <BusSearch />
            </TabsContent>

            <TabsContent value="holidays">
              <HolidaySearch />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

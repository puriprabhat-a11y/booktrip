import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from '../ui/sonner';

const HolidaySearch = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState('3');
  const [travelers, setTravelers] = useState('2');

  const handleSearch = () => {
    if (!destination || !startDate) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Searching for holiday packages...');
    console.log('Holiday Search:', { destination, startDate, duration, travelers });
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="md:col-span-4">
          <Label htmlFor="destination" className="text-gray-700 mb-2 block">Destination</Label>
          <Input
            id="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Start Date */}
        <div className="md:col-span-3">
          <Label htmlFor="startDate" className="text-gray-700 mb-2 block">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Duration */}
        <div className="md:col-span-2">
          <Label htmlFor="duration" className="text-gray-700 mb-2 block">Duration (Days)</Label>
          <Input
            id="duration"
            type="number"
            min="1"
            max="30"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Travelers */}
        <div className="md:col-span-3">
          <Label htmlFor="holidayTravelers" className="text-gray-700 mb-2 block">Travelers</Label>
          <Input
            id="holidayTravelers"
            type="number"
            min="1"
            max="20"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Package Type */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="packageType" className="text-gray-700 mb-2 block">Package Type</Label>
          <select
            id="packageType"
            className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Packages</option>
            <option value="beach">Beach Holiday</option>
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural Tour</option>
            <option value="luxury">Luxury Getaway</option>
            <option value="family">Family Package</option>
            <option value="honeymoon">Honeymoon Special</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Search className="h-5 w-5 mr-2" />
          Search Packages
        </Button>
      </div>
    </div>
  );
};

export default HolidaySearch;

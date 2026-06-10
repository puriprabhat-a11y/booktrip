import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from '../ui/sonner';

const HotelSearch = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState('1');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    if (!location || !checkIn || !checkOut) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Searching for hotels...');
    console.log('Hotel Search:', { location, checkIn, checkOut, rooms, guests });
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Location */}
        <div className="md:col-span-4">
          <Label htmlFor="location" className="text-gray-700 mb-2 block">Location</Label>
          <Input
            id="location"
            placeholder="Enter city, area or hotel name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Check-in Date */}
        <div className="md:col-span-3">
          <Label htmlFor="checkIn" className="text-gray-700 mb-2 block">Check-in</Label>
          <Input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Check-out Date */}
        <div className="md:col-span-3">
          <Label htmlFor="checkOut" className="text-gray-700 mb-2 block">Check-out</Label>
          <Input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Rooms */}
        <div className="md:col-span-1">
          <Label htmlFor="rooms" className="text-gray-700 mb-2 block">Rooms</Label>
          <Input
            id="rooms"
            type="number"
            min="1"
            max="10"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Guests */}
        <div className="md:col-span-1">
          <Label htmlFor="guests" className="text-gray-700 mb-2 block">Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="20"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Search className="h-5 w-5 mr-2" />
          Search Hotels
        </Button>
      </div>
    </div>
  );
};

export default HotelSearch;

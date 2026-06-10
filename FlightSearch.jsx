import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { toast } from '../ui/sonner';
import { Toaster } from '../ui/sonner';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('1');
  const [classType, setClassType] = useState('economy');

  const handleSearch = () => {
    if (!from || !to || !departDate) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Searching for flights...');
    console.log('Flight Search:', { tripType, from, to, departDate, returnDate, travelers, classType });
  };

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />
      
      {/* Trip Type */}
      <RadioGroup value={tripType} onValueChange={setTripType} className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="roundTrip" id="roundTrip" />
          <Label htmlFor="roundTrip" className="cursor-pointer">Round Trip</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneWay" id="oneWay" />
          <Label htmlFor="oneWay" className="cursor-pointer">One Way</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multiCity" id="multiCity" />
          <Label htmlFor="multiCity" className="cursor-pointer">Multi City</Label>
        </div>
      </RadioGroup>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* From */}
        <div className="md:col-span-3">
          <Label htmlFor="from" className="text-gray-700 mb-2 block">From</Label>
          <Input
            id="from"
            placeholder="Enter city or airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex items-end justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={swapCities}
            className="h-12 w-12 rounded-full hover:bg-blue-50"
          >
            <ArrowRightLeft className="h-5 w-5 text-blue-600" />
          </Button>
        </div>

        {/* To */}
        <div className="md:col-span-3">
          <Label htmlFor="to" className="text-gray-700 mb-2 block">To</Label>
          <Input
            id="to"
            placeholder="Enter city or airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Departure Date */}
        <div className="md:col-span-2">
          <Label htmlFor="departDate" className="text-gray-700 mb-2 block">Departure</Label>
          <div className="relative">
            <Input
              id="departDate"
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="h-12"
            />
          </div>
        </div>

        {/* Return Date */}
        {tripType === 'roundTrip' && (
          <div className="md:col-span-2">
            <Label htmlFor="returnDate" className="text-gray-700 mb-2 block">Return</Label>
            <div className="relative">
              <Input
                id="returnDate"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="h-12"
              />
            </div>
          </div>
        )}
      </div>

      {/* Travelers and Class */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="travelers" className="text-gray-700 mb-2 block">Travelers</Label>
          <Input
            id="travelers"
            type="number"
            min="1"
            max="9"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="h-12"
          />
        </div>

        <div>
          <Label htmlFor="class" className="text-gray-700 mb-2 block">Class</Label>
          <select
            id="class"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
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
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearch;

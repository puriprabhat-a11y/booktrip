import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from '../ui/sonner';

const BusSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSearch = () => {
    if (!from || !to || !travelDate) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Searching for buses...');
    console.log('Bus Search:', { from, to, travelDate });
  };

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* From */}
        <div className="md:col-span-4">
          <Label htmlFor="busFrom" className="text-gray-700 mb-2 block">From</Label>
          <Input
            id="busFrom"
            placeholder="Enter city name"
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
        <div className="md:col-span-4">
          <Label htmlFor="busTo" className="text-gray-700 mb-2 block">To</Label>
          <Input
            id="busTo"
            placeholder="Enter city name"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Travel Date */}
        <div className="md:col-span-3">
          <Label htmlFor="busDate" className="text-gray-700 mb-2 block">Travel Date</Label>
          <Input
            id="busDate"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
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
          Search Buses
        </Button>
      </div>
    </div>
  );
};

export default BusSearch;

import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from '../ui/sonner';

const TrainSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [classType, setClassType] = useState('sleeper');

  const handleSearch = () => {
    if (!from || !to || !travelDate) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Searching for trains...');
    console.log('Train Search:', { from, to, travelDate, classType });
  };

  const swapStations = () => {
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
          <Label htmlFor="trainFrom" className="text-gray-700 mb-2 block">From</Label>
          <Input
            id="trainFrom"
            placeholder="Enter station name or code"
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
            onClick={swapStations}
            className="h-12 w-12 rounded-full hover:bg-blue-50"
          >
            <ArrowRightLeft className="h-5 w-5 text-blue-600" />
          </Button>
        </div>

        {/* To */}
        <div className="md:col-span-4">
          <Label htmlFor="trainTo" className="text-gray-700 mb-2 block">To</Label>
          <Input
            id="trainTo"
            placeholder="Enter station name or code"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Travel Date */}
        <div className="md:col-span-3">
          <Label htmlFor="trainDate" className="text-gray-700 mb-2 block">Travel Date</Label>
          <Input
            id="trainDate"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Class Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="trainClass" className="text-gray-700 mb-2 block">Class</Label>
          <select
            id="trainClass"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="w-full h-12 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="sleeper">Sleeper (SL)</option>
            <option value="3ac">3 AC (3A)</option>
            <option value="2ac">2 AC (2A)</option>
            <option value="1ac">1 AC (1A)</option>
            <option value="chair">Chair Car (CC)</option>
            <option value="general">General</option>
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
          Search Trains
        </Button>
      </div>
    </div>
  );
};

export default TrainSearch;

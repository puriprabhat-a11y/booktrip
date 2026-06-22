import React, { useState } from 'react';
import { Plane, Hotel, Train, Bus, Palmtree, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import SearchSection from '../components/SearchSection';
import OffersSection from '../components/OffersSection';
import PopularDestinations from '../components/PopularDestinations';
import HolidayPackages from '../components/HolidayPackages';
import FeaturesSection from '../components/FeaturesSection';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Palmtree className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Fantasy World</h1>
                <p className="text-xs text-gray-600">Holidays</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Offers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">My Bookings</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Offers</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">My Bookings</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                <button className="text-left text-gray-700 hover:text-blue-600">Login</button>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium w-full">
                  Sign Up
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Search Section */}
        <SearchSection />

        {/* Offers Section */}
        <OffersSection />

        {/* Holiday Packages */}
        <HolidayPackages />

        {/* Popular Destinations */}
        <PopularDestinations />

        {/* Features Section */}
        <FeaturesSection />

        {/* Download App Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Our App</h2>
              <p className="text-lg mb-8 opacity-90">Book on the go with exclusive mobile-only deals</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                  App Store
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Fantasy World Holidays</h3>
              <p className="text-sm mb-4">Your trusted travel partner for unforgettable journeys around the world.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Flight Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotel Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Train Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bus Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Holiday Packages</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>+91 1800-123-4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>support@fantasyworldholidays.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Fantasy World Holidays. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

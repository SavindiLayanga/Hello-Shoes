import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, Phone, Info, Coffee } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white opacity-65 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RESTO</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center text-gray-700 hover:text-amber-600">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-amber-600">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/menu" className="flex items-center text-gray-700 hover:text-amber-600">
              <Menu className="h-5 w-5 mr-1" />
              <span>Menu</span>
            </Link>
            <Link to="/service" className="flex items-center text-gray-700 hover:text-amber-600">
              <Coffee className="h-5 w-5 mr-1" />
              <span>Service</span>
            </Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-amber-600">
              <Phone className="h-5 w-5 mr-1" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
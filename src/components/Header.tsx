import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Wifi } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GFPortal</Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Wifi className="mr-2" />
            <span>Connected: 2h 30m</span>
          </div>
          <div className="flex items-center">
            <Wallet className="mr-2" />
            <span>1,234.56 S</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
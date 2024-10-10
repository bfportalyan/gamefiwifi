import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Gift, ShoppingBag, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to GFPortal: Your Gateway to Web3 Gaming and Services</h1>
      
      <div className="bg-gray-800 rounded-lg p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Profile Summary</h2>
        <p>Username: CryptoGamer123</p>
        <p>S Token Balance: 1,234.56 S</p>
        <p>Sonic Gems: 789</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Games</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {['Crypto Legends: Battle Arena', 'NFT Pet World', 'DeFi Tycoon', 'Metaverse Racer', 'Blockchain Puzzler'].map((game, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-36 bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-center">{game}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { icon: <Gamepad2 />, text: 'Play Now' },
          { icon: <Trophy />, text: 'Leaderboard' },
          { icon: <Gift />, text: 'Rewards Center' },
          { icon: <ShoppingBag />, text: 'Marketplace' },
          { icon: <Zap />, text: 'My Games' },
        ].map((item, index) => (
          <Link key={index} to="#" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg p-4">
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </Link>
        ))}
      </div>

      {/* Add more sections here based on the provided description */}
    </div>
  );
};

export default LandingPage;
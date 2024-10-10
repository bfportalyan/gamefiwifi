import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">Tutorials</Link></li>
              <li><Link to="#">FAQs</Link></li>
              <li><Link to="#">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="#">Forum</Link></li>
              <li><Link to="#">Discord</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About GFPortal</h3>
            <p>Your gateway to Web3 gaming and services. Play, earn, and connect in the world of blockchain gaming.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 GFPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
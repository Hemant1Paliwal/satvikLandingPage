import React from 'react';
import { Instagram, Facebook, Heart, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-emerald-400" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Satvify
            </h3>
            <Heart className="w-8 h-8 text-emerald-400" />
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transforming lives through the power of pure, plant-based nutrition. 
            Join us on the journey to radiant health and conscious living.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://instagram.com/satvify_your_soul"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-pink-700 hover:to-purple-700"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">@satvify_your_soul</span>
          </a>
          
          <a
            href="https://facebook.com/share/1J334YfKK5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-800"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Satvify</span>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Satvify. All rights reserved. Made with love for conscious living.
          </p>
          
          <div className="flex justify-center gap-6 text-sm">
            <button className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Animated fade-in effect */}
        <div className="space-y-8 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Your Gateway to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Satvic Lifestyle
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect harmony of purity and joy through plant-powered nourishment that feeds both body and soul
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-emerald-700 hover:to-emerald-600 flex items-center gap-2">
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:scale-105">
              Explore Menu
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
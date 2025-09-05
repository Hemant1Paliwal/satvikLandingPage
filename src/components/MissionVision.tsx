import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Purpose & Promise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by ancient wisdom and modern innovation, we're building a movement that transforms lives through conscious nutrition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                To make plant-powered, healing food accessible, exciting, and perfectly aligned with nature's wisdom. 
                We're dedicated to promoting conscious living, environmental sustainability, and inner well-being through 
                every meal we create.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-emerald-200">
                  <div className="font-semibold text-emerald-700 text-sm">Accessibility</div>
                  <div className="text-xs text-gray-600 mt-1">Healing food for everyone</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-200">
                  <div className="font-semibold text-emerald-700 text-sm">Sustainability</div>
                  <div className="text-xs text-gray-600 mt-1">Planet-conscious choices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A world inspired by Satvic principles, where every individual is guided by nature's wisdom, 
                embracing holistic well-being, environmental harmony, and compassionate living as the foundation 
                of a thriving global community.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-orange-200">
                  <div className="font-semibold text-orange-700 text-sm">Holistic Health</div>
                  <div className="text-xs text-gray-600 mt-1">Mind, body, and spirit</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-orange-200">
                  <div className="font-semibold text-orange-700 text-sm">Global Impact</div>
                  <div className="text-xs text-gray-600 mt-1">Worldwide transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
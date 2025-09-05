import React from 'react';
import { Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-emerald-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">About Satvify</h2>
            <Leaf className="w-8 h-8 text-emerald-600" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-orange-50 p-8 rounded-3xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Essence of Our Name</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-emerald-600">Satvify</strong> beautifully combines two powerful concepts:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-emerald-200">
                    <strong className="text-emerald-700">"Satv"</strong>
                    <p className="text-sm mt-1">Purity & Goodness</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-orange-200">
                    <strong className="text-orange-600">"fy"</strong>
                    <p className="text-sm mt-1">Fulfillment & Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Than Food</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Satvify represents a complete lifestyle revolution rooted in the timeless principles of purity, conscious nourishment, and inner joy. We believe that what we consume doesn't just fuel our bodies—it shapes our consciousness, influences our well-being, and connects us to the natural world.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">Conscious Living</span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">Inner Wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
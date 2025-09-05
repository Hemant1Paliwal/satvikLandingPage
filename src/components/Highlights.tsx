import React from 'react';
import { Leaf, Heart, Droplets, Recycle, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: '100% Plant-Based & Vegan',
    description: 'Pure plant power with no animal products, nurturing both your health and compassion for all living beings.',
    color: 'emerald'
  },
  {
    icon: Heart,
    title: 'Zero Stimulants',
    description: 'Free from onion, garlic, tea, and coffee—allowing your natural energy and clarity to shine through.',
    color: 'rose'
  },
  {
    icon: Droplets,
    title: 'Water-Rich Ingredients',
    description: 'Locally sourced, hydrating foods that cleanse and energize your system from within.',
    color: 'blue'
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Approach',
    description: 'Minimal waste, sustainable practices, and packaging that honors our planet Earth.',
    color: 'green'
  },
  {
    icon: Sparkles,
    title: 'Spiritual Nourishment',
    description: 'Food prepared with intention and love, feeding your soul while nourishing your body.',
    color: 'amber'
  }
];

const colorClasses = {
  emerald: {
    icon: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    hover: 'hover:border-emerald-300'
  },
  rose: {
    icon: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    hover: 'hover:border-rose-300'
  },
  blue: {
    icon: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300'
  },
  green: {
    icon: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    hover: 'hover:border-green-300'
  },
  amber: {
    icon: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    hover: 'hover:border-amber-300'
  }
};

const Highlights = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50" id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Satvify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative power of conscious eating through our carefully curated approach to pure, plant-based nourishment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            const colors = colorClasses[highlight.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl border-2 ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
              >
                <div className={`w-16 h-16 ${colors.bg} border-2 ${colors.border} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 relative overflow-hidden" id="subscribe">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-orange-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Satvify Movement
          </h2>
          <p className="text-xl text-emerald-100 mb-4 leading-relaxed">
            Walk with us toward radiant health, ethical choices, and inner clarity.
          </p>
          <p className="text-lg text-emerald-200">
            Be the first to discover new recipes, wellness tips, and exclusive insights into the Satvic lifestyle.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-transparent bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-orange-600 hover:to-orange-700 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <p className="text-sm text-emerald-200">
              Join over 10,000 conscious food lovers. No spam, just pure inspiration.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <CheckCircle className="w-16 h-16 text-green-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Movement!</h3>
            <p className="text-emerald-100">
              Thank you for joining us. Check your inbox for a special welcome gift!
            </p>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="text-emerald-100">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-sm">Happy Members</div>
          </div>
          <div className="text-emerald-100">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm">Satvic Recipes</div>
          </div>
          <div className="text-emerald-100">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-sm">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Glow Package',
    price: '$99',
    features: [
      'Skin Analysis',
      'Custom Foundation Match',
      'Basic Makeup Application',
      'Luxury LRP Cosmetics Gift',
    ],
  },
  {
    title: 'Radiant Elegance Package',
    price: '$199',
    features: [
      'Comprehensive Skin Consultation',
      'Personalized Makeup Tutorial',
      'Full Makeup Application',
      'Luxury LRP Cosmetics Gift Set',
    ],
  },
  {
    title: 'Ultimate Luxury Experience',
    price: '$299',
    features: [
      'VIP Skin Consultation',
      'One-on-One Makeup Masterclass',
      'Complete Makeup Application',
      'Exclusive Luxury LRP Cosmetics Collection',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Luxury LRP Cosmetics Pricing
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover our exclusive packages designed to enhance your beauty with luxury.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {tier.title}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
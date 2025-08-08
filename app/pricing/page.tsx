import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Skin Care Package',
    price: '$150',
    features: [
      'Premium moisturizer',
      'Revitalizing serum',
      'Gentle exfoliator',
      'Luxury packaging',
    ],
  },
  {
    title: 'Glamorous Makeup Collection',
    price: '$200',
    features: [
      'High-end foundation',
      'Silky smooth lipstick',
      'Radiant blush',
      'Elegant eyeshadow palette',
    ],
  },
  {
    title: 'Complete Beauty Experience',
    price: '$350',
    features: [
      'All-inclusive skin care',
      'Full makeup set',
      'Personalized consultation',
      'Exclusive membership benefits',
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the Luxury Skin Care Package?',
    answer: 'The Luxury Skin Care Package includes a premium moisturizer, revitalizing serum, gentle exfoliator, and luxury packaging.',
  },
  {
    question: 'How do I choose the right makeup products?',
    answer: 'Our experts provide personalized consultations to help you select the perfect products for your skin type and style.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Yes, all our products are cruelty-free and made with the highest quality ingredients.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Choose This Package
            </button>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-3xl font-bold mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="bg-orange-50 p-6 rounded-lg">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
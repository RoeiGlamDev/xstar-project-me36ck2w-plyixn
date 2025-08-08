import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join the Luxury LRP Cosmetics Family",
  description = "Subscribe to our newsletter for exclusive offers, beauty tips, and the latest product launches.",
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        {isSubmitted ? (
          <motion.div
            className="bg-orange-100 text-orange-600 p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Thank you for subscribing to Luxury LRP Cosmetics!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-orange-500 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
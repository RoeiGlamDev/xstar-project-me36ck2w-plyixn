import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        We would love to hear from you! Please fill out the form below.
      </motion.p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-orange-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            required
          />
        </div>
        <motion.div
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 rounded hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <p className="text-lg">Visit us at:</p>
        <p className="text-lg">123 Luxury Lane</p>
        <p className="text-lg">Cosmetics City, CA 90210</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
        <p className="text-lg">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;
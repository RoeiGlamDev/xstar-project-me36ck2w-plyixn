import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      // Here you would typically handle form submission, e.g., sending data to an API
    }
  };

  return (
    <section className="bg-white p-10 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-gray-700 mb-4">
        For inquiries about our luxury cosmetics, please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${
              errors.name ? 'border-red-500' : 'border-orange-300'
            }}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${
              errors.email ? 'border-red-500' : 'border-orange-300'
            }}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border-2 rounded-md p-2 w-full border-orange-300"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Wholesale Inquiry">Wholesale Inquiry</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border-2 rounded-md p-2 w-full ${
              errors.message ? 'border-red-500' : 'border-orange-300'
            }}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.div
          type="submit"
          className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      {submitted && <p className="text-green-500 mt-4">Thank you for your message!</p>}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-600">Business Information</h3>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">123 Luxury St, Glamour City, CA 90210</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialMediaLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

const Footer: React.FC<FooterProps> = ({ companyInfo, socialMediaLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">luxury LRP cosmetics</h2>
          <p className="mt-2 text-lg">Elevate your beauty with our luxurious products.</p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Company Information</h3>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.phone}</p>
            <p>{companyInfo.email}</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.div
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Facebook
              </motion.a>
              <motion.div
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Instagram
              </motion.a>
              <motion.div
                href={socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-orange-200 pt-4">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
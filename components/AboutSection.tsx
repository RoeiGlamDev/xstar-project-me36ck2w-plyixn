import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Carter',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia brings a passion for luxury and quality to luxury LRP cosmetics.',
  },
  {
    name: 'James Lee',
    role: 'Head of Product Development',
    description: 'James specializes in formulating high-end cosmetic products that enhance natural beauty while ensuring skin health.',
  },
  {
    name: 'Olivia Martinez',
    role: 'Marketing Director',
    description: 'Olivia crafts compelling narratives that resonate with our luxury clientele, ensuring that luxury LRP cosmetics stands out in the market.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h2>
        <p className="text-lg mb-6">
          At luxury LRP cosmetics, we believe that beauty is an art form. Founded with a vision to redefine luxury in the cosmetics industry, our brand is dedicated to creating high-quality products that not only enhance your beauty but also nourish your skin. Our journey began with a simple mission: to provide luxurious, effective, and ethically sourced cosmetics that empower individuals to express their unique beauty.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-6">
          Our mission at luxury LRP cosmetics is to elevate the beauty experience by offering innovative products that combine luxury with efficacy. We are committed to sustainability and ethical practices, ensuring that every product reflects our values of quality, integrity, and elegance.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md italic">{member.role}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <p className="text-lg mb-6">
          At luxury LRP cosmetics, we value innovation, quality, and sustainability. Our commitment to excellence drives us to continuously improve our products and practices, ensuring that we remain at the forefront of the luxury cosmetics industry.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    position: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Creative Director',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Head of Marketing',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen p-10">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">About luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg">
          Discover the elegance and sophistication behind luxury LRP cosmetics.
        </p>
      </motion.header>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold">Our History</h2>
        <p className="mt-4">
          Founded in the heart of the beauty industry, luxury LRP cosmetics has
          been dedicated to providing high-end, luxurious products that enhance
          natural beauty. Our journey began with a vision to create cosmetics
          that not only look exquisite but also feel exceptional on the skin.
        </p>
      </motion.section>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>Quality: We prioritize the highest quality ingredients.</li>
          <li>Innovation: We embrace creativity and cutting-edge technology.</li>
          <li>Sustainability: We are committed to eco-friendly practices.</li>
          <li>Elegance: We believe in the power of luxury in beauty.</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-3">{member.name}</h3>
              <p className="text-lg">{member.position}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
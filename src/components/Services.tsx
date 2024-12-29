import React from 'react';
import { Activity, Baby, Heart, Stethoscope, Thermometer, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const services = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "General Check-ups",
    description: "Comprehensive health examinations and preventive care"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Cardiology",
    description: "Heart health monitoring and preventive cardiology services"
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Pediatric Care",
    description: "Specialized healthcare for infants, children, and adolescents"
  },
  {
    icon: <Syringe className="h-8 w-8" />,
    title: "Vaccinations",
    description: "Full range of vaccines for children and adults"
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Diagnostics",
    description: "Advanced diagnostic testing and laboratory services"
  },
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: "Urgent Care",
    description: "Immediate care for non-emergency medical conditions"
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg transform-gpu"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-blue-600 font-medium flex items-center group"
                >
                  Learn More
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
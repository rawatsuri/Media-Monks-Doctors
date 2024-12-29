import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingElement from './animations/FloatingElement';
import FadeIn from './animations/FadeIn';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <FadeIn direction="left">
              <motion.span 
                className="inline-block text-blue-600 text-lg font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Welcome to HealthCare Plus
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Health Is Our
                <span className="text-blue-600 relative">
                  {" Top Priority "}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <path
                      d="M0 10 Q25 0 50 10 Q75 20 100 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </motion.svg>
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-gray-600">
                Expert medical care with a personal touch. Schedule your appointment today
                and experience healthcare excellence.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold text-blue-600"
                  >
                    15+
                  </motion.div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold text-blue-600"
                  >
                    10k+
                  </motion.div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold text-blue-600"
                  >
                    98%
                  </motion.div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative hidden md:block">
            <FloatingElement>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  alt="Doctor with patient"
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          src={`https://i.pravatar.cc/40?img=${i}`}
                          alt={`Doctor ${i}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold">Expert Doctors</div>
                      <div className="text-gray-500">Available 24/7</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </div>
  );
}
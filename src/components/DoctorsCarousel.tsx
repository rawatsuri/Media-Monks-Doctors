import React from 'react';
import { ChevronLeft, ChevronRight, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import useInfiniteCarousel from '../hooks/useInfiniteCarousel';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    qualifications: "MD, FAAFP",
    experience: "15+ years",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    qualifications: "MD, FACC",
    experience: "12+ years",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    qualifications: "MD, FAAP",
    experience: "10+ years",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Internal Medicine",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
    qualifications: "MD, FACP",
    experience: "18+ years",
  }
];

export default function DoctorsCarousel() {
  const { currentIndex, slides, next, previous, handleTransitionEnd } = useInfiniteCarousel(doctors);

  return (
    <div id="doctors" className="py-20 bg-blue-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Meet Our Doctors
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Expert healthcare professionals dedicated to your well-being
          </motion.p>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((doctor, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-full w-full object-cover md:h-96"
                        />
                      </div>
                      <div className="p-8 md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="mt-2 text-xl text-blue-600">{doctor.specialty}</p>
                        <div className="mt-4 flex items-center">
                          <GraduationCap className="h-5 w-5 text-gray-600" />
                          <span className="ml-2 text-gray-600">{doctor.qualifications}</span>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Award className="h-5 w-5 text-gray-600" />
                          <span className="ml-2 text-gray-600">{doctor.experience} experience</span>
                        </div>
                        <p className="mt-4 text-gray-600">
                          Specialized in providing comprehensive healthcare with a focus on patient-centered treatment approaches.
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Book Appointment
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
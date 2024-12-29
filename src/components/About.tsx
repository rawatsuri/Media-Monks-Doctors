import React from 'react';
import { Award, Clock, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Dr. Sarah Johnson</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience in family medicine, Dr. Johnson provides
            comprehensive healthcare services for patients of all ages.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
            alt="Doctor's office"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Board Certified</h4>
                  <p className="mt-1 text-gray-600">
                    Certified by the American Board of Family Medicine
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Patient-Centered Care</h4>
                  <p className="mt-1 text-gray-600">
                    Personalized attention and care for every patient
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Extended Hours</h4>
                  <p className="mt-1 text-gray-600">
                    Flexible scheduling including evening appointments
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Convenient Location</h4>
                  <p className="mt-1 text-gray-600">
                    Easy access with ample parking space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
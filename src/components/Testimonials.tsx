import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      text: "Dr. Johnson is incredibly thorough and caring. She takes the time to listen and explain everything clearly.",
      rating: 5
    },
    {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      text: "The best medical care I've ever received. The entire staff is professional and friendly.",
      rating: 5
    },
    {
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      text: "Outstanding service and modern facilities. Highly recommend for family healthcare.",
      rating: 5
    }
  ];

  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Patient Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See what our patients say about their experience with us
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
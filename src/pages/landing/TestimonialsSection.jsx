import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PetConnect helped me find a loving home for my rescued puppy in just 3 days. It was so easy to use and heartwarming to see the support from the community!",
      name: "Kathy Sullivan",
      role: "Animal Rescuer",
      quoteIcon: "https://api.builder.io/api/v1/image/assets/TEMP/0d7714542f82ec78b003183d5440e4435c49b1d2?placeholderIfAbsent=true"
    },
    {
      quote: "I posted about my lost cat, and within hours I received leads from neighbors. PetConnect brought my Snowy back home!",
      name: "Elsie Stroud",
      role: "Pet Owner",
      quoteIcon: "https://api.builder.io/api/v1/image/assets/TEMP/8f989065fc5db25e9c675aa3c67655235332d2e5?placeholderIfAbsent=true"
    },
    {
      quote: "As a volunteer, I can track help requests from people in my area. It makes responding to emergencies faster and more organized.",
      name: "Kathy Sullivan",
      role: "NGO Volunteer",
      quoteIcon: "https://api.builder.io/api/v1/image/assets/TEMP/b64a4b4180f179c4bbe58a792d1a4883e95e02d1?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24">
      {/* Background image for this section - Replaced with provided image src */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4b82fe347e599622090745218f21ae33006da23a?placeholderIfAbsent=true"
        alt="Background"
        className="object-cover absolute inset-0 w-full h-full opacity-50"
      />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};



export default TestimonialsSection;

import React from 'react';
const TestimonialCard = ({ quote, name, role, quoteIcon }) => {
  return (
    <article className="bg-white p-8 text-center rounded-3xl shadow-md">
      <img src={quoteIcon} alt="Quote icon" className="w-12 h-auto mx-auto mb-4"/>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{role}</p>
    </article>
  );
};

export default TestimonialCard;

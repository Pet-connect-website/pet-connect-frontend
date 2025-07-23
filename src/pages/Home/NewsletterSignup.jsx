import React from 'react';

export default function NewsletterSignup() {
  return (
    <section className="bg-[#5c4033] text-white py-10 text-center">
      <h2 className="text-xl mb-4">Join our volunteer network and rescue lives</h2>
      <div className="flex justify-center gap-4 px-4">
        <input
          type="email"
          placeholder="Type your email address here"
          className="px-4 py-2 rounded text-black w-64"
        />
        <button 
         style={{
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
  }}
         className="bg-[#fbe7d6] text-black px-4 py-2 rounded">Submit now</button>
      </div>
    </section>
  );
}

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
        <button className="bg-[#c7a88c] text-black px-4 py-2 rounded">Submit now</button>
      </div>
    </section>
  );
}

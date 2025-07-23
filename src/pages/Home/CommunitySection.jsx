import React from 'react';
import niroshaImg from '../../assets/nirosha.png';
import spcaImg from '../../assets/kandy-spca.png';
import isuruImg from '../../assets/isuru.png';

const entries = [
  {
    img: niroshaImg,
    alt: 'Nirosha',
    name: 'nirosha',
    message: 'What’s the best food for senior cats?',
  },
  {
    img: spcaImg,
    alt: 'Kandy SPCA',
    name: 'kandy spca',
    message: 'Free vaccinations this weekend',
  },
  {
    img: isuruImg,
    alt: 'Isuru',
    name: 'isuru',
    message: 'We adopted Max from PetConnect – here’s our story',
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-14 px-4 text-center bg-[#d5c8bb]"
    >
      <div className="bg-white/80 max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl text-center space-y-8 border border-[#e5d6c8]">
        <h2 className="text-4xl font-extrabold mb-8 text-black drop-shadow ">
          Community Engagement
        </h2>
        {entries.map((entry, idx) => (
          <div
            key={idx}
            style={{ boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px" }}
            className="flex flex-col items-center gap-6 bg-[#e9ded6] rounded-xl p-4 hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex flex-col items-center w-24">
              <img
                src={entry.img}
                className="w-14 h-14 rounded-full border-4 border-[#e9ded6] shadow"
                alt={entry.alt}
              />
              <span className="text-xs font-semibold mt-2 lowercase text-[#7c4a36]">
                {entry.name}
              </span>
            </div>
            <p className="font-semibold flex-1 text-[#4b2f25] text-lg text-center">{entry.message}</p>
          </div>
        ))}
        <div className="text-center mt-6">
          <a href="/commwall">
            <button
              style={{
                boxShadow:
                  'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
              }}
              className="bg-gradient-to-r from-[#7c4a36] to-[#a67c52] text-white px-6 py-3 rounded font-bold text-lg transition-all duration-200 hover:bg-[#4b2f25] hover:scale-105 shadow-lg"
            >
              Visit Wall
            </button>
          </a>
          <p className="mt-3 text-[#7c4a36] text-sm">
            Click here to visit wall and start discussion
          </p>
        </div>
      </div>
    </section>
  );
}

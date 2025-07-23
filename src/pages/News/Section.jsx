// src/pages/News/Section.jsx
import PetCard from './PetCard';

export default function Section({ title, data }) {
  return (
    <section className="bg-[#fef8f4] rounded-xl shadow p-5">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#3c2f26]">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map((pet, idx) => (
          <PetCard key={idx} {...pet} />
        ))}
      </div>
      {/* Pagination Dots Placeholder */}
      <div className="flex justify-center mt-10 space-x-2">
        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}

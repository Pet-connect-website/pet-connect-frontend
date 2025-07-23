// src/pages/News/PetCard.jsx
export default function PetCard({ name, description, image }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-md text-[#4a372f]">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

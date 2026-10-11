export default function PetCard({ name, description, image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center max-w-sm mx-auto">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-base text-[#4a372f]">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

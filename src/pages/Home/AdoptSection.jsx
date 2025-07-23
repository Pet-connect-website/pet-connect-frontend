import petsGroup from '../../assets/petsGroup.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export default function AdoptSection() {
  const navigate = useNavigate();

  const handleGoToAdoption = () => {
    navigate('/adoption');};
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center py-12 bg-[#e3d7cb57] px-6">
      {/* Left Arrow */}
      <button className="absolute left-4 md:left-10 p-2 rounded-full bg-white shadow hover:bg-[#d2c5bb] transition">
        <ChevronLeft className="w-6 h-6 text-[#4b2f25]" />
      </button>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">
        {/* Text Block */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Adopt a Pet</h2>
          <p className="font-medium mb-6">
            Find your perfect companion – whether you’re giving a home to a rescued pet or buying from a verified owner
          </p>
          <button
          onClick={handleGoToAdoption}
          className="bg-[#4b2f25] text-white py-2 px-4 rounded">Adopt now</button>
        </div>

        {/* Image Block */}
        <div className="relative">
          <img src={petsGroup} alt="pets" className="w-64 md:w-72" />
        </div>
      </div>

      {/* Right Arrow */}
      <button      className="absolute right-4 md:right-10 p-2 rounded-full bg-white shadow hover:bg-[#d2c5bb] transition">
        <ChevronRight className="w-6 h-6 text-[#4b2f25]" />
      </button>
    </section>
  );
}

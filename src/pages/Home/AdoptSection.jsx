import petsGroup from '../../assets/petsGroup.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const buttonBoxShadow =
  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";

export default function AdoptSection() {
  const navigate = useNavigate();

  const handleGoToAdoption = () => {
    navigate('/adoption');
  };
  return (
    <section 
     style={{
      boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
     }}
    className="relative flex flex-col md:flex-row justify-center items-center py-12 bg-[#e3d7cb57] px-6">
      {/* Left Arrow */}
      <button
        style={{ boxShadow: buttonBoxShadow }}
        className="absolute left-4 md:left-10 p-2 rounded-full bg-white hover:bg-[#d2c5bb] transition"
      >
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
            style={{ boxShadow: buttonBoxShadow }}
            className="bg-[#7c4a36] text-white px-4 py-2 rounded transition-all duration-200 hover:bg-[#4b2f25] hover:scale-105"
          >
            Adopt now
          </button>
        </div>

        {/* Image Block */}
        <div className="relative">
          <img src={petsGroup} alt="pets" className="w-64 md:w-72" />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        style={{ boxShadow: buttonBoxShadow }}
        className="absolute right-4 md:right-10 p-2 rounded-full bg-white hover:bg-[#d2c5bb] transition"
      >
        <ChevronRight className="w-6 h-6 text-[#4b2f25]" />
      </button>
    </section>
  );
}

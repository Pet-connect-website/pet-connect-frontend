// src/pages/News/News.jsx
import Section from './Section';
import lostPetsData from './LostPetsData';
import streetPetsData from './streetPetsData';
import adoptionPetsData from './adoptionPetsData';
import salePetsData from './salePetsData';
import Navigation from './Navigation';
import Footer from './Footer';

export default function News() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-[#f6f3ef] px-4 py-10 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Section title="Lost Pets" data={lostPetsData} />
        <Section title="Street Pet Help" data={streetPetsData} />
        <Section title="Pets For Adoption" data={adoptionPetsData} />
        <Section title="Pets For Sale" data={salePetsData} />
      </div>
    </div>
    <Footer />
    </>
    
  );
}

import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer'
// Main Adoption Component
const Adoption = () => {
    // Pet data array
    const [pets] = useState([
        {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            age: "2 years",
            location: "Colombo",
            description: "Buddy is a playful and friendly Golden Retriever who loves to fetch and go on long walks. He's great with kids and other pets.",
            imageUrl: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            name: "Whiskers",
            breed: "Siamese",
            age: "1 year",
            location: "Kandy",
            description: "Whiskers is a charming Siamese cat with striking blue eyes. She enjoys quiet afternoons basking in the sun and gentle cuddles.",
            imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            name: "Rocky",
            breed: "German Shepherd",
            age: "3 years",
            location: "Galle",
            description: "Rocky is a loyal and intelligent German Shepherd. He's well-trained and would thrive in an active home with plenty of space to run.",
            imageUrl: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 4,
            name: "Luna",
            breed: "Domestic Shorthair",
            age: "6 months",
            location: "Negombo",
            description: "Luna is a sweet and curious kitten, full of energy. She loves playing with toys and exploring new places.",
            imageUrl: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 5,
            name: "Max",
            breed: "Labrador",
            age: "4 years",
            location: "Jaffna",
            description: "Max is a gentle giant, a loving Labrador who enjoys swimming and being around people. He's looking for a family to call his own.",
            imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 6,
            name: "Cleo",
            breed: "Sphynx",
            age: "2 years",
            location: "Matara",
            description: "Cleo is a unique and affectionate Sphynx cat, known for her playful antics and love for warm blankets. She's a true character!",
            imageUrl: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 7,
            name: "Daisy",
            breed: "Beagle",
            age: "1.5 years",
            location: "Anuradhapura",
            description: "Daisy is an energetic and cheerful Beagle. She loves sniffing out new adventures and would be a great companion for an active individual or family.",
            imageUrl: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 8,
            name: "Shadow",
            breed: "Black Cat",
            age: "3 years",
            location: "Batticaloa",
            description: "Shadow is a sleek and mysterious black cat. He's independent but enjoys a good head scratch and a cozy spot for naps.",
            imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
        }
    ]);

    // State for modal visibility and selected pet
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);

    // Function to open the modal with pet details
    const handleViewDetails = (pet) => {
        setSelectedPet(pet);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null); // Clear selected pet when closing
    };

    return (
        <div className="min-h-screen flex flex-col font-inter bg-stone-100">
            {/* Header */}
            <Navigation/>

            {/* Main Content Area */}
            <main className="flex-grow container mx-auto p-6 mt-12">
                <h2 className="text-6xl font-extrabold text-center text-stone-800 mb-16 leading-tight drop-shadow-md">Discover Your New Best Friend!</h2>

                {/* Pet Listings Grid */}
                <section id="pet-listings" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {pets.map(pet => (
                        <PetCard key={pet.id} pet={pet} onViewDetails={handleViewDetails} />
                    ))}
                </section>
            </main>

            {/* Pet Details Modal */}
            {isModalOpen && selectedPet && (
                <PetModal pet={selectedPet} onClose={handleCloseModal} />
            )}

            {/* Footer */}
            <Footer/>
        </div>
    );
};

// Pet Card Component
const PetCard = ({ pet, onViewDetails }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 hover:scale-102 border border-stone-200">
            <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-full h-56 object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E0E0/808080?text=Image+Not+Found'; }}
            />
            <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-4xl font-bold text-stone-900 mb-3 tracking-tight">{pet.name}</h3>
                <p className="text-stone-700 text-xl mb-2"><span className="font-semibold text-stone-800">Breed:</span> {pet.breed}</p>
                <p className="text-stone-700 text-xl mb-5"><span className="font-semibold text-stone-800">Age:</span> {pet.age}</p>
                <button
                    onClick={() => onViewDetails(pet)}
                    className="mt-auto bg-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-2xl hover:bg-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

// Pet Modal Component
const PetModal = ({ pet, onClose }) => {
    const [modalVisible, setModalVisible] = useState(false);

    // Use useEffect to handle the modal's entry/exit animation
    useEffect(() => {
        // When the modal is mounted, trigger the entry animation
        setModalVisible(true);
        // Add event listener for escape key to close modal
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleCloseAnimation();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    // Function to trigger exit animation before closing
    const handleCloseAnimation = () => {
        setModalVisible(false);
        // Wait for the transition to complete before unmounting
        setTimeout(onClose, 300); // Match transition duration
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={handleCloseAnimation}
        >
            <div
                className={`bg-white rounded-3xl shadow-3xl p-10 max-w-3xl w-full relative transform transition-all duration-300 ease-out
                    ${modalVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleCloseAnimation}
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-4xl font-bold transition duration-300 transform hover:rotate-90 focus:outline-none"
                >
                    &times;
                </button>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img
                            src={pet.imageUrl}
                            alt={pet.name}
                            className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg border border-stone-200"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E0E0/808080?text=Image+Not+Found'; }}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">{pet.name}</h3>
                        <p className="text-xl text-stone-700 mb-3"><span className="font-semibold text-stone-800">Breed:</span> {pet.breed}</p>
                        <p className="text-xl text-stone-700 mb-3"><span className="font-semibold text-stone-800">Age:</span> {pet.age}</p>
                        <p className="text-xl text-stone-700 mb-6"><span className="font-semibold text-stone-800">Location:</span> {pet.location}</p>
                        <p className="text-stone-800 leading-relaxed text-lg mb-8">{pet.description}</p>
                        <button className="w-full bg-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-2xl hover:bg-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300">
                            Adopt Me!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adoption;

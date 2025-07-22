import React from 'react';
import lostDog from '../../assets/post-lost.png';
import woundedPuppy from '../../assets/post-wounded.png';
import adoptionCat from '../../assets/tanalCat.jpg';

export default function LatestPosts() {
  const posts = [
    {
      title: 'Lost',
      pet: 'Milo the Bordeaux Mastiff',
      time: '1 day ago',
      location: 'near Moratuwa',
      img: lostDog,
    },
    {
      title: 'Wounded puppy',
      pet: 'Needs help',
      time: '',
      location: 'Kandy City Park',
      img: woundedPuppy,
    },
    {
      title: 'Adoption',
      pet: 'Cat Tanal for adoption',
      time: '2 hrs ago',
      location: 'at a home in Matara',
      img: adoptionCat,
    },
  ];

  return (
    <section className="py-10 px-4 text-center bg-[#d5c8bb]">
      <h2 className="text-3xl font-bold mb-6">Latest posts</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-[#f4e8dc] p-5 rounded-lg w-64 shadow-md">
            <img src={post.img} alt={post.title} className="w-full h-36 object-cover rounded mb-2" />
            <h3 className="text-xl font-bold mb-1">{post.title}</h3>
            <p>{post.pet}</p>
            <p className="text-sm text-gray-600">{post.time}</p>
            <p className="text-sm text-gray-600">{post.location}</p>
            <button className="mt-3 bg-[#4b2f25] text-white text-sm px-3 py-1 rounded">Explore more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

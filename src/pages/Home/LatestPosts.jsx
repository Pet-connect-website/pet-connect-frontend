import React from 'react';
import lostDog from '../../assets/post-lost.png';
import woundedPuppy from '../../assets/post-wounded.png';
import adoptionCat from '../../assets/tanalCat.jpg';
import Post from '../post/post';
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

  const handleExplore = () => {
    // All types go to the same page, e.g., /posts
    window.location.href = '/post';
  };

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
            <button
               style={{
    boxShadow:
      'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
  }}
              className="bg-[#7c4a36]  my-2 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-[#4b2f25] hover:scale-105"
              onClick={() => handleExplore(post)}
            >
              Explore more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

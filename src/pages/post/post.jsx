import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import bgPattern from '../../assets/bgw&b.png';

// Utility function to format time difference
const getTimeAgo = (dateString) => {
  const now = new Date();
  const postDate = new Date(dateString);
  const seconds = Math.floor((now - postDate) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

const initialPosts = [
  {
    _id: '60c72b1f9e1d8c0015f3e9b1',
    title: 'Happy Adoption Story: Meet Luna!',
    description: 'After weeks of searching, we finally found our perfect companion, Luna, at the local shelter! She\'s a playful husky mix with the sweetest eyes. Our home feels complete now. Remember to adopt, not shop!',
    category: 'adoption',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg',
    author: 'Sarah M.',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: '60c72b1f9e1d8c0015f3e9b2',
    title: 'Found Dog: Friendly Golden Retriever',
    description: 'Found a very friendly golden retriever near Central Park. No collar or tags. Seems well-fed and trained. If you recognize this beautiful dog, please contact me immediately!',
    category: 'lost',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/08/07/14/10/golden-retriever-4390884_1280.jpg',
    author: 'John D.',
    createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: '60c72b1f9e1d8c0015f3e9b3',
    title: 'Stray Kitten Needs a Home!',
    description: 'Found a tiny, adorable stray kitten hiding under my car. She\'s very shy but gentle. I can\'t keep her, so I\'m looking for a loving home for this little furball. She needs lots of cuddles!',
    category: 'stray',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/08/04/23/06/cat-7365680_1280.jpg',
    author: 'Emily R.',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: '60c72b1f9e1d8c0015f3e9b4',
    title: 'Success Story: From Shelter to Sofa!',
    description: 'It\'s been a year since we adopted Max, our energetic terrier mix. He\'s transformed from a timid shelter dog to a confident, happy member of our family. So glad we opened our home to him!',
    category: 'adoption',
    imageUrl: 'https://cdn.pixabay.com/photo/2023/07/24/15/21/pet-8147283_1280.jpg',
    author: 'David L.',
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: '60c72b1f9e1d8c0015f3e9b5',
    title: 'Lost Bird: Green Parrot "Kiwi"',
    description: 'My green parrot, Kiwi, flew away from home this morning. He\'s very vocal and loves fruit. If you see him, please try to gently guide him to safety and contact me. He\'s part of our family!',
    category: 'lost',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/02/24/12/39/green-parrot-8593958_1280.jpg',
    author: 'Olivia P.',
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
  },
];

const Post = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    author: 'Anonymous',
  });
  const [posts, setPosts] = useState(initialPosts);
  const [error, setError] = useState(null);

  // Handle input changes for the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to add a new post
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!formData.title || !formData.description || !formData.category) {
      setError("Please fill in all required fields.");
      return;
    }
    const newPost = {
      ...formData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    setFormData({ title: '', description: '', category: '', imageUrl: '', author: 'Anonymous' });
    setShowForm(false);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-white to-[#C0A086] flex flex-col items-center py-12 px-4 font-inter" style={{ position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "400px 400px",
            opacity: 0.4,
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
        <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl border border-gray-100" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B4033] to-[#C0A086]">
              Community Stories
            </span>
          </h1>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#5B4033] rounded-full group bg-gradient-to-br from-[#5B4033] to-[#C0A086] group-hover:from-[#5B4033] group-hover:to-[#C0A086] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#C0A086]/50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                {showForm ? 'Hide Post Form' : 'Share Your Story'}
              </span>
            </button>
          </div>
          {showForm && (
            <div className="bg-stone-50 p-8 rounded-lg shadow-inner mb-10 border border-stone-200 animate-fade-in-down">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Post</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="postTitle" className="block text-base font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    id="postTitle"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="A catchy title for your post..."
                    className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#5B4033] focus:border-[#5B4033] text-base transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postDescription" className="block text-base font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    id="postDescription"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Share your experience, tips, or news here..."
                    className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#5B4033] focus:border-[#5B4033] text-base transition duration-200"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="postCategory" className="block text-base font-medium text-gray-700 mb-2">Category</label>
                  <select
                    id="postCategory"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#5B4033] focus:border-[#5B4033] text-base transition duration-200 bg-white"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="adoption">Adoption</option>
                    <option value="stray">Stray</option>
                    <option value="lost">Lost & Found</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="postImageUrl" className="block text-base font-medium text-gray-700 mb-2">Image URL (Optional)</label>
                  <input
                    type="url"
                    id="postImageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="e.g., https://your-image-host.com/photo.jpg"
                    className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#5B4033] focus:border-[#5B4033] text-base transition duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="postAuthor" className="block text-base font-medium text-gray-700 mb-2">Your Name/Alias</label>
                  <input
                    type="text"
                    id="postAuthor"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="e.g., Pet Enthusiast"
                    className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#5B4033] focus:border-[#5B4033] text-base transition duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#5B4033] to-[#C0A086] text-white font-bold rounded-full shadow-lg hover:from-[#5B4033]/90 hover:to-[#C0A086]/90 focus:outline-none focus:ring-4 focus:ring-[#C0A086]/50 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Publish Your Story
                </button>
              </form>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div className="space-y-8">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post._id} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-72 object-cover object-center border-b border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/700x450/E0E0E0/666666?text=Image+Unavailable`;
                      }}
                    />
                  )}
                  <div className="p-7 bg-[#c0a0862b]">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-[#C0A086]/20 text-[#5B4033] text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <p className="text-sm text-gray-500">
                        Posted by <span className="font-medium text-[#5B4033]">{post.author || 'Anonymous'}</span>
                        {' • '}
                        <span className="font-medium">{post.createdAt ? getTimeAgo(post.createdAt) : 'just now'}</span>
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-5 text-lg">{post.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-xl mt-12 p-4 bg-gray-50 rounded-lg shadow-inner">
                No stories yet. Be the first to share something amazing!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;

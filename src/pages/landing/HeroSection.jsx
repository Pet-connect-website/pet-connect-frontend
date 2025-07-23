import React, { useState } from 'react';

const CommunityWall = () => {
    const [posts, setPosts] = useState([
        {
            id: '1',
            petName: 'Buddy',
            description: 'My furry best friend enjoying a sunny afternoon at the park! He loves chasing squirrels (unsuccessfully). What are your pets favorite outdoor activities?',
            imageUrl: 'https://images.unsplash.com/photo-1548681525-47e2baa7fbc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            userName: 'Sarah M.',
            likes: 125,
            isLiked: false,
            comments: [
                { id: 'c1', userName: 'DogLover22', text: 'Buddy looks so happy! My golden loves playing fetch in the yard.' },
                { id: 'c2', userName: 'CatMom', text: 'So cute! My cat just enjoys sunbathing indoors. 😂' },
            ],
        },
        {
            id: '2',
            petName: 'Whiskers',
            description: 'Just woke up from a long nap on my favorite sunny spot. Ready for treats and cuddles! 😴 Any tips for getting a cat to play more?',
            imageUrl: '',
            userName: 'Tom K.',
            likes: 88,
            isLiked: false,
            comments: [
                { id: 'c3', userName: 'PurrfectPal', text: 'Try a laser pointer or feather wand! My cat goes crazy for them.' },
                { id: 'c4', userName: 'FelineFriend', text: 'Some cats just prefer napping! Whiskers looks very content.' },
            ],
        },
        {
            id: '3',
            petName: 'Dash',
            description: 'Adventure time! Dash just discovered that tall grass is the best place to play hide and seek. What a goofball! What fun games do you play with your pets?',
            imageUrl: 'https://images.unsplash.com/photo-1561021204-74cf8f844a2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            userName: 'Jessica P.',
            likes: 73,
            isLiked: false,
            comments: [],
        },
        {
            id: '4',
            petName: 'Pip',
            description: 'This is Pip, my tiny chinchilla friend! He loves his dust baths and getting little pieces of apple as a treat. So soft and curious! Anyone else have exotic pets?',
            imageUrl: '',
            userName: 'Alex C.',
            likes: 45,
            isLiked: false,
            comments: [
                { id: 'c5', userName: 'ReptileFan', text: 'I have a bearded dragon! They are surprisingly affectionate.' },
            ],
        },
        {
            id: '5',
            petName: 'General Pet Care Tips',
            description: 'What are your go-to tips for keeping your pets healthy and happy? Share your wisdom on diet, exercise, grooming, or anything else!',
            imageUrl: '',
            userName: 'ForumAdmin',
            likes: 30,
            isLiked: false,
            comments: [
                { id: 'c6', userName: 'VetTech', text: 'Regular vet check-ups are crucial, even if your pet seems fine!' },
                { id: 'c7', userName: 'HappyPaws', text: 'Daily walks and interactive toys keep my dog entertained and fit.' },
            ],
        },
    ]);

    const [petName, setPetName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [showPostForm, setShowPostForm] = useState(false);

    const handleAddPost = (e) => {
        e.preventDefault();
        if (!petName.trim() || !description.trim()) {
            alert('Please fill in the Topic/Pet Name and Your Post/Question fields!');
            return;
        }
        const newPost = {
            id: Date.now().toString(),
            petName: petName.trim(),
            description: description.trim(),
            imageUrl: imageUrl.trim(),
            userName: 'You',
            likes: 0,
            isLiked: false,
            comments: [],
        };
        setPosts([newPost, ...posts]);
        setPetName('');
        setDescription('');
        setImageUrl('');
        setShowPostForm(false);
    };

    const handleLikeToggle = (id) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                          isLiked: !post.isLiked,
                      }
                    : post
            )
        );
    };

    const handleAddComment = (postId, commentText) => {
        if (!commentText.trim()) {
            alert('Comment cannot be empty!');
            return;
        }
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                          ...post,
                          comments: [
                              ...post.comments,
                              {
                                  id: Date.now().toString(),
                                  userName: 'Current User',
                                  text: commentText.trim(),
                              },
                          ],
                      }
                    : post
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#C0A086] font-inter text-[#5B4033] flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            <header className="w-full max-w-4xl bg-[#5B4033] text-white py-6 rounded-xl shadow-lg text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">🐾 Pet Community Forum 🐾</h1>
            </header>

            <main className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <button
                        onClick={() => setShowPostForm(!showPostForm)}
                        className="bg-[#5B4033] hover:bg-[#4a352b] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                    >
                        {showPostForm ? 'View Active Discussions' : 'Start a New Discussion'}
                    </button>
                </div>

                {showPostForm && (
                    <section className="bg-[#E3D7CB] p-6 sm:p-8 rounded-xl shadow-lg mb-8 transition-all duration-300 ease-in-out">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5B4033] mb-6 text-center">Start a New Discussion!</h2>
                        <form onSubmit={handleAddPost} className="space-y-4">
                            <div>
                                <label htmlFor="petName" className="block text-sm font-medium text-[#5B4033] mb-1">Topic/Pet Name:</label>
                                <input
                                    type="text"
                                    id="petName"
                                    value={petName}
                                    onChange={(e) => setPetName(e.target.value)}
                                    placeholder="e.g., My New Puppy, Discussing Pet Health"
                                    className="w-full p-3 border border-[#C0A086] rounded-lg focus:ring-2 focus:ring-[#5B4033] focus:border-transparent transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-[#5B4033] mb-1">Your Post/Question:</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Share your thoughts, ask a question, or tell us a story about your pet!"
                                    rows="4"
                                    className="w-full p-3 border border-[#C0A086] rounded-lg focus:ring-2 focus:ring-[#5B4033] focus:border-transparent transition duration-200 resize-y"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-[#5B4033] mb-1">Image URL (Optional):</label>
                                <input
                                    type="url"
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="Paste a direct image URL here (e.g., of your pet or related topic)"
                                    className="w-full p-3 border border-[#C0A086] rounded-lg focus:ring-2 focus:ring-[#5B4033] focus:border-transparent transition duration-200"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#5B4033] hover:bg-[#4a352b] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                            >
                                Post to Forum
                            </button>
                        </form>
                    </section>
                )}

                {!showPostForm && (
                    <section className="bg-[#E3D7CB] p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5B4033] mb-6 text-center">Active Discussions</h2>
                        <div className="space-y-6">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-[#E3D7CB] border border-[#C0A086] rounded-lg overflow-hidden shadow-sm">
                                    {post.imageUrl && (
                                        <img
                                            src={post.imageUrl}
                                            alt={post.petName}
                                            className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.co/600x400/C0A086/5B4033?text=Image+Unavailable`;
                                            }}
                                        />
                                    )}
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-[#5B4033] mb-2">{post.petName}</h3>
                                        <p className="text-[#5B4033]/80 text-base leading-relaxed mb-4">{post.description}</p>
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-[#5B4033]/80 border-t border-[#C0A086] pt-3 sm:pt-4 gap-2 sm:gap-0">
                                            <span>Posted by: <span className="font-medium text-[#5B4033]">{post.userName}</span></span>
                                            <button
                                                onClick={() => handleLikeToggle(post.id)}
                                                className={`flex items-center space-x-1 px-3 py-1 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${post.isLiked ? 'bg-red-700 text-white shadow-md' : 'bg-[#5B4033] text-white hover:bg-[#4a352b]'}`}
                                            >
                                                {post.isLiked ? '❤️' : '🤍'}
                                                <span>{post.likes}</span>
                                            </button>
                                        </div>

                                        <div className="mt-6 border-t border-[#C0A086] pt-4">
                                            <h4 className="text-lg font-semibold text-[#5B4033] mb-3">Comments ({post.comments.length})</h4>
                                            <div className="space-y-3 mb-4">
                                                {post.comments.length > 0 ? (
                                                    post.comments.map((comment) => (
                                                        <div key={comment.id} className="bg-[#f6eee7] p-3 rounded-lg text-sm border border-[#C0A086]">
                                                            <span className="font-semibold text-[#5B4033]">{comment.userName}:</span> {comment.text}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-[#5B4033]/80 text-sm">No comments yet. Be the first to reply!</p>
                                                )}
                                            </div>
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    const commentInput = e.target.elements.commentText;
                                                    handleAddComment(post.id, commentInput.value);
                                                    commentInput.value = '';
                                                }}
                                                className="flex gap-2"
                                            >
                                                <input
                                                    type="text"
                                                    name="commentText"
                                                    placeholder="Add a comment..."
                                                    className="flex-grow p-2 border border-[#C0A086] rounded-lg text-sm focus:ring-1 focus:ring-[#5B4033] focus:border-transparent transition duration-200"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-[#5B4033] hover:bg-[#4a352b] text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-sm"
                                                >
                                                    Reply
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setShowPostForm(true)}
                    className="bg-[#5B4033] hover:bg-[#4a352b] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
                    aria-label="Start a new discussion"
                >
                    +
                </button>
            </div>

            <footer className="w-full max-w-4xl bg-[#5B4033] text-white py-4 rounded-xl shadow-inner mt-8 text-center">
                <p className="text-sm">&copy; 2025 Pet Community Forum. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CommunityWall;

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/landing/landing';
import Home from './pages/Home/Home';
import Adoption from './pages/Adoption/adoption';
import Post from './pages/post/post';

import Login from './pages/Login';       // ✅ Your addition
import SignUp from './pages/Signup';     // ✅ Your addition
import CommunityWall from './pages/commwall/commwall'; // ✅ From upstream

function App() {
  const [isLoggedIn] = useState(true); // Change this to false to test login flow

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main app pages */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/post" element={<Post />} />
        <Route path="/commwall" element={<CommunityWall />} />  {/* ✅ Added from upstream */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

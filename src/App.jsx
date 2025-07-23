// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Landing from './pages/landing/landing.jsx' 

// function App() {
//   const [count, setCount] = useState(0)

//   return <Landing/>
// }

// export default App
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/landing/landing';
import Home from './pages/Home/Home';
import Adoption from './pages/Adoption/adoption';
import Post from './pages/post/post';
function App() {
  // Temporarily set this to true for testing Home.jsx
  const [isLoggedIn] = useState(true); // Change to false to test Landing page

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing/>} />
        {/* Default route: show Home if logged in, else Landing */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Landing />} />
        <Route path="/home" element={<Home />} />
        {/* Add other routes as needed */}
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/post" element={<Post />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

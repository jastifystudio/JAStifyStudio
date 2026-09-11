import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import About from './pages/about/about';
import Home from './pages/home/home';
import Templates from './pages/templates/templates';
import Contact from './pages/contact/contact';
import ResumeStudio from './pages/resume-studio/resumeStudio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resumeStudio" element={<ResumeStudio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

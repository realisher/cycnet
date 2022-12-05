import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import Courses from './components/pages/Courses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDescription from './components/pages/CourseDescription';
import NewsPage from './components/pages/NewsPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/courses'element={<Courses />} />
          <Route path='/courseDes'element={<CourseDescription />} />
          <Route path='/news'element={<NewsPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
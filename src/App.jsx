import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList.jsx'; // Include .jsx extension
import MovieDetail from '../src/pages/Home/MovieDetail/MovieDetail.jsx'; // Include .jsx extension

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/search/:query" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

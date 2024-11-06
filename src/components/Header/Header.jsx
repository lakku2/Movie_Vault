import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);  // Navigate to the search results page with the query
    }
  };

  return (
    <div className='header'>
      <div className="header_left">
        <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" /></Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>
      <div className="header_right">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search_input" 
        />
        <button className="search_button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type, query } = useParams(); // Get 'type' for categories and 'query' for search

  useEffect(() => {
    fetchMovies();
  }, [type, query]); // Fetch movies when type or search query changes

  const fetchMovies = () => {
    let apiUrl;
    const apiKey = '0d64acd295b7bab1d338726ec90906a3'; // Your API Key

    if (query) {
      // Search for movies if a query exists
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
    } else {
      // Fetch movies based on type (popular, top_rated, upcoming, etc.)
      apiUrl = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${apiKey}&language=en-US`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovieList(data.results))
      .catch(err => console.error('Error fetching movies:', err));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{query ? `Results for "${query}"` : (type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {
          movieList.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
};

export default MovieList;

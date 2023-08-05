import React, { useState } from "react";
// import useEffect from "react";
import { useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";

//key: 1a61fc19
const API_URL = 'http://www.omdbapi.com?apikey=1a61fc19'
// const SearchIcon = 'https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png';
const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () =>{

  //hooks states
  const[movies, setMovies] = useState([])
  const[searchItem, setsearchItem] = useState('');

  const searchMovies = async (title) =>{
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return(
    <div className="app">
      {/* title */}
      <h1>Movie HUB</h1>

      {/* search bar */}
      <div className="search">
        <input placeholder="Search For Movies" 
        value={searchItem}
        onChange={(e) =>setsearchItem(e.target.value)}
        />
        <button onClick={()=>searchMovies(searchItem)}>
          Search
        </button>
      </div>

      {
        movies?.length > 0 ?
        (
          <div className="container">
              
              {movies.map((movie) =>(
                <MovieCard movie1={movie}/>
              ))}
          </div>
        ) :
        (
          <div className="empty">
            <h1>No Movies Found</h1>
          </div>
        )
      }

      {/* container */}
      
      
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList2";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f5c21f051c51d8563d1bcc753328eba1&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        const data = res.data.results;
        setMovies(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;

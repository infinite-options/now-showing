import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { WhichMovieHeader } from "../components/WhichMovieText";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MovieCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  max-width: 500px;
  width: 100%;
`;

const MoviePoster = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
  margin-right: 10px;
`;

const MovieInfo = styled.div`
  flex: 1;
`;

const MovieTitle = styled.p`
  margin-bottom: 5px;
  word-wrap: break-word;
  font-family: "Merriweather", serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(219, 227, 255, 1);
`;

const ReleaseDate = styled.p`
  font-family: "Merriweather", serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(219, 227, 255, 1);
`;

const AddButton = styled.button`
  margin-left: auto;
`;

const Results = () => {
  const { movie_title } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      if (movie_title) {
        try {
          const API_KEY = "916893c3e71b0b37e324a142b99253f0";
          const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie_title}`;
          const res = await axios.get(API_URL);
          const moviesData = res.data.results || [];
          setMovies(moviesData);
        } catch (err) {
          console.error("Error getting movies:", err);
        }
      } else {
        setMovies([]);
      }
    };
    getMovies();
  }, [movie_title]);

  const handleAddButtonClick = (movieTitle) => {
    if (movieTitle.trim() !== "") {
      const existingTitles = sessionStorage.getItem("selectedMovieTitles");
      const selectedTitles = existingTitles ? JSON.parse(existingTitles) : [];

      selectedTitles.push(movieTitle);
      sessionStorage.setItem(
        "selectedMovieTitles",
        JSON.stringify(selectedTitles)
      );

      navigate("/");
    }
  };

  return (
    <div>
      <WhichMovieHeader />
      <MovieContainer>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id}>
              {movie.poster_path && (
                <>
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <ReleaseDate>
                      Release Year: {movie.release_date.slice(0, 4)}
                    </ReleaseDate>
                  </MovieInfo>
                  <AddButton onClick={() => handleAddButtonClick(movie.title)}>
                    Add
                  </AddButton>
                </>
              )}
            </MovieCard>
          ))
        ) : (
          <p>No movies found with this title</p>
        )}
      </MovieContainer>
    </div>
  );
};

export default Results;

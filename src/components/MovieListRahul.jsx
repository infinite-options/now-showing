import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

const MoviePosterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 0px;
  justify-items: center;
`;

const MoviePoster = styled.div`
  flex-basis: 50%;
  padding: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
    margin: 0;
    height: auto;
    object-fit: cover;
  }
`;

const MovieTitle = styled.h3`
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 10px;
  margin-bottom: 2px;
`;

const MovieRating = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 8px;
  margin-top: 5px;

  svg {
    color: rgba(255, 195, 25, 1);
    margin-right: 2px;
  }
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const MovieRunTime = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 8px;
`;

const StyledIcon = styled(StarIcon)``;

const MovieList = ({ movies }) => {
  return (
    <div>
      <MoviePosterContainer>
        {movies.slice(0, 4).map((movie, index) => (
          <MoviePoster key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDetailsContainer>
              <MovieRunTime>n/a</MovieRunTime>
              <MovieRating>
                <StyledIcon />
                {movie.vote_average}
              </MovieRating>
            </MovieDetailsContainer>
          </MoviePoster>
        ))}
      </MoviePosterContainer>
    </div>
  );
};

export default MovieList;

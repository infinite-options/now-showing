import React from "react";
import styled from "styled-components";
import MovieList from "./MovieList2";
import MovieRatingSlider from "./MovieRatingSlider";

const CardContainer = styled.div`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MovieCard = (props) => {
  const { movies } = props;
  return (
    <CardContainer>
      <MovieRatingSlider />
      <MovieList movies={movies} />
    </CardContainer>
  );
};

export default MovieCard;

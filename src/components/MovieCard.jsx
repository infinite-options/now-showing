import React from "react";
import styled from "styled-components";
import MovieList from "./MovieList";

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
      <MovieList movies={movies} />
    </CardContainer>
  );
};

export default MovieCard;

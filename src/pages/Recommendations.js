import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import { NowShowingHeader } from "../components/NowShowingText";
import TryTheseText from "../components/TryTheseText";

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const GetMoreRecommendationButton = styled.button`
  background: #8daac836;
  border-radius: 10px;
  padding: 10px;
  color: rgba(219, 227, 255, 0.81);
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  border: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  width: 223px;
  height: 34px;
`;

//Page 6  - Logged In
const Recommendations = () => {
  return (
    <Container>
      <NowShowingHeader />
      <TryTheseText />
      <ButtonContainer>
        <GetMoreRecommendationButton>
          Get More Recommendations
        </GetMoreRecommendationButton>
      </ButtonContainer>
      <Movies>{(movies) => <MovieCard movies={movies} />}</Movies>
    </Container>
  );
};

export default Recommendations;

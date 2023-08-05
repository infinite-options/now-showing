import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GetMoreRecommendationButtonWithIcons2 } from "../components/Buttons";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import { NowShowingHeader } from "../components/NowShowingText";

const PageBG = createGlobalStyle`
  body {background-color: #192027;
  }
`;

const Container = styled.div``;

//Page 3 - Logged In
const Page3 = () => {
  return (
    <Container>
      <PageBG />
      <NowShowingHeader />
      <GetMoreRecommendationButtonWithIcons2 />
      <Movies>{(movies) => <MovieCard movies={movies} />}</Movies>
    </Container>
  );
};

export default Page3;

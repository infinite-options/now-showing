import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  CreateAccountButton2,
  GetMoreRecommendationButtonWithIcons,
} from "../components/Buttons";
import TryTheseButton from "../components/TryTheseText";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import { NowShowingHeader } from "../components/NowShowingText";

const PageBG = createGlobalStyle`
  body {background-color: #192027;
  }
`;

const Container = styled.div``;

const Page3 = () => {
  return (
    <Container>
      <PageBG />
      <NowShowingHeader />
      <TryTheseButton />
      <GetMoreRecommendationButtonWithIcons />
      <Movies>{(movies) => <MovieCard movies={movies} />}</Movies>
      <CreateAccountButton2 />
    </Container>
  );
};

export default Page3;

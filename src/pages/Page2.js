import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  CreateAccountButton2,
  GetMoreRecommendationButton,
} from "../components/Buttons";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import { NowShowingHeader } from "../components/NowShowingText";
import TryTheseText from "../components/TryTheseText";

const PageBG = createGlobalStyle`
  body {background-color: #192027;
  }
`;

const Container = styled.div``;

//Page 2 - Logged Out
const Page2 = () => {
  return (
    <Container>
      <PageBG />
      <NowShowingHeader />
      <TryTheseText />
      <GetMoreRecommendationButton />
      <Movies>{(movies) => <MovieCard movies={movies} />}</Movies>
      <CreateAccountButton2 />
    </Container>
  );
};

export default Page2;

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  CreateAccountButton,
  LoginButton,
  RecommendationButton,
} from "../components/Buttons";
import MovieInput from "../components/MovieInput";
import { NowShowingHeader } from "../components/NowShowingText";
import MyFavoritesText from "../components/MyFavoritesText";

const PageBG = createGlobalStyle`
  body {background-color: #192027;
  }
`;

const StyledMyFavoritesText = styled(MyFavoritesText)`
  margin-bottom: 217px;
  border: 1px solid red;
`;

const MyFavoritesTextWrapper = styled.div``;

const Container = styled.div``;

const Page1 = () => {
  return (
    <Container>
      <PageBG />
      <NowShowingHeader />
      <MyFavoritesTextWrapper>
        <StyledMyFavoritesText />
      </MyFavoritesTextWrapper>
      <MovieInput />
      <MovieInput />
      <MovieInput />
      <MovieInput />
      <MovieInput />
      <RecommendationButton />
      <LoginButton />
      <CreateAccountButton />
    </Container>
  );
};

export default Page1;

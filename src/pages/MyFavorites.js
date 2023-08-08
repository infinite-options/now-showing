import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  CreateAccountButton,
  LoginButton,
  RecommendationButton,
} from "../components/Buttons";
import MovieInput from "../components/MovieInput";
import { NowShowingHeader } from "../components/NowShowingText";
import MyFavoritesText from "../components/MyFavoritesText";
// import { useNavigate } from "react-router-dom";

const PageBG = createGlobalStyle`
  body {background-color: #192027;}
`;

const StyledMyFavoritesText = styled(MyFavoritesText)`
  margin-bottom: 217px;
`;

const MyFavoritesTextWrapper = styled.div``;

const Container = styled.div``;

//Page 1 - Logged Out
const MyFavorites = () => {
  const [movieInputs, setMovieInputs] = useState([
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ]);

  useEffect(() => {
    const selectedTitles = sessionStorage.getItem("selectedMovieTitles");
    if (selectedTitles) {
      const parsedTitles = JSON.parse(selectedTitles);
      setMovieInputs((prevInputs) => {
        const updatedInputs = prevInputs.map((input, index) => ({
          ...input,
          title: parsedTitles[index] || "",
        }));
        return updatedInputs;
      });
    }
  }, []);

  const handleInputChange = (index, title) => {
    setMovieInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index].title = title;
      return updatedInputs;
    });
  };

  const renderMovieInputs = () => {
    return movieInputs.map((input, index) => (
      <MovieInput
        key={index}
        title={input.title}
        onInputChange={(title) => handleInputChange(index, title)}
      />
    ));
  };

  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate("/Login/");
  // };

  // const handleCreateAccountClick = () => {
  //   navigate("/CreateAccount/");
  // };

  return (
    <Container>
      <PageBG />
      <NowShowingHeader />
      <MyFavoritesTextWrapper>
        <StyledMyFavoritesText />
      </MyFavoritesTextWrapper>
      {renderMovieInputs()}
      <RecommendationButton />
      <LoginButton />
      <CreateAccountButton />
    </Container>
  );
};

export default MyFavorites;

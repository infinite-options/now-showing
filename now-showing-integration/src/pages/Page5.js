import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  MovieCategoriesButton,
  GetMoreRecommendationButtonWithIcons2,
} from "../components/Buttons";
import MovieInput from "../components/MovieInput";
// import { useNavigate } from "react-router-dom";
import { MyRatingsHeader } from "../components/MyRatingsText";

const PageBG = createGlobalStyle`
  body {background-color: #192027;}
`;

const Container = styled.div``;

//Page 5 - Logged In?
const Page5 = () => {
  const [movieInputs, setMovieInputs] = useState([
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
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
      <MyRatingsHeader />
      <MovieCategoriesButton />
      <GetMoreRecommendationButtonWithIcons2 />
      {renderMovieInputs()}
    </Container>
  );
};

export default Page5;

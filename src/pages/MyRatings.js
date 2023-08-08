import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieCategoriesButton } from "../components/Buttons";
import StarIcon from "@mui/icons-material/Star";
import MovieInput from "../components/MovieInput";
import { useNavigate } from "react-router-dom";
import { MyRatingsHeader } from "../components/MyRatingsText";
import { ReactComponent as PopcornIcon } from "../assets/icons/PopcornIcon.svg";

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const StyledIcon = styled(StarIcon)`
  color: rgba(255, 195, 25, 1);
  width: 32px;
  height: 32px;
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
  margin-right: 10px;
`;

const PopcornButton = styled.button`
  background: transparent;
  border: none;
  max-width: 20px;
  cursor: pointer;
  margin-right: 30px;
`;

const StarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`;

//Page 5 - Logged In?
const MyRatings = () => {
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

  const navigate = useNavigate();

  const handlePopcornClick = () => {
    navigate("/pages/Popcorn/");
  };

  const handleStarClick = () => {
    navigate("/pages/MyRatings/");
  };

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
      <MyRatingsHeader />
      <MovieCategoriesButton />
      <ButtonContainer>
        <StarButton>
          <StyledIcon onClick={handleStarClick} />
        </StarButton>
        <GetMoreRecommendationButton>
          Get More Recommendations
        </GetMoreRecommendationButton>
        <PopcornButton>
          <PopcornIcon onClick={handlePopcornClick} />
        </PopcornButton>
      </ButtonContainer>
      {renderMovieInputs()}
    </Container>
  );
};

export default MyRatings;

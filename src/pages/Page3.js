import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import { NowShowingHeader } from "../components/NowShowingText";
import { useNavigate } from "react-router-dom";
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

//Page 3 - Logged In

const Page3 = () => {
  const navigate = useNavigate();

  const handlePopcornClick = () => {
    navigate("/pages/Popcorn/");
  };

  const handleStarClick = () => {
    navigate("/pages/Page5/");
  };

  return (
    <Container>
      <NowShowingHeader />
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
      <Movies>{(movies) => <MovieCard movies={movies} />}</Movies>
    </Container>
  );
};

export default Page3;

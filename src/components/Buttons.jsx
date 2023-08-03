import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "../assets/icons/FavoriteIcon.svg";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import PopcornIcon from "../assets/icons/PopcornIcon.svg";

const MovieCategoriesButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
`;

const RecommendationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 34px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 34px;
`;

const CreateAccountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 34px;
`;

const CreateAccountButtonContainer2 = styled.div`
  margin-top: 25px;
  padding-bottom: 30px;
`;

const GetMoreRecommendationsButtonContainer = styled.div`
  padding-bottom: 30px;
`;

const AddButtonContainer = styled.div`
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #323e4ab0;
  border-radius: 10px;
  color: white;
  border: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const Button2 = styled.button`
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

const Button3 = styled.button`
  background: #8daac8;
  border-radius: 10px;
  padding: 10px;
  color: white;
  font-weight: 400;
  font-family: "Mulish", sans-serif;
  border: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  width: 223px;
  height: 34px;
`;

const Button4 = styled.button`
  background: #8daac8;
  border-radius: 10px;
  padding: 10px;
  color: #ffc319;
  border: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  width: 223px;
  height: 34px;
`;

const Button5 = styled.button`
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

const Button6 = styled.button`
  background: #8daac8;
  border-radius: 10px;
  padding: 10px;
  color: #ffc319;
  border: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  width: 223px;
  height: 34px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  .FavoriteIcon {
    width: 28px;
    height: 28px;
  }
`;

const StyledIcon = styled(StarIcon)`
  color: rgba(255, 195, 25, 1);
  width: 24px;
  height: 24px;
`;

const Button7 = styled.button`
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
  width: 60px;
  height: 40px;
`;

export const MovieCategoriesButton = () => {
  return (
    <MovieCategoriesButtonContainer>
      <Button>Action</Button>
      <Button>Comedy</Button>
      <Button>Adventure</Button>
    </MovieCategoriesButtonContainer>
  );
};

export const RecommendationButton = () => {
  return (
    <RecommendationButtonContainer>
      <Button2>Get Recommendations</Button2>
    </RecommendationButtonContainer>
  );
};

export const GetMoreRecommendationButton = () => {
  return (
    <GetMoreRecommendationsButtonContainer>
      <Button5>Get More Recommendations</Button5>
    </GetMoreRecommendationsButtonContainer>
  );
};

export const LoginButton = () => {
  return (
    <LoginButtonContainer>
      <Button3>Login</Button3>
    </LoginButtonContainer>
  );
};

export const CreateAccountButton = () => {
  return (
    <CreateAccountButtonContainer>
      <Button4>Create Account</Button4>
    </CreateAccountButtonContainer>
  );
};

export const CreateAccountButton2 = () => {
  return (
    <CreateAccountButtonContainer2>
      <Button6>Create Account</Button6>
    </CreateAccountButtonContainer2>
  );
};

export const GetMoreRecommendationButtonWithIcons = () => {
  return (
    <GetMoreRecommendationsButtonContainer>
      <IconContainer>
        <StyledIcon />
        <Icon src={FavoriteIcon} alt="favorite icon" />
        <Button5>Get More Recommendations</Button5>
        <Icon src={ProfileIcon} className="FavoriteIcon" alt="profile icon" />
        <Icon src={PopcornIcon} alt="popcorn icon" />
      </IconContainer>
    </GetMoreRecommendationsButtonContainer>
  );
};

export const AddButton = () => {
  return (
    <AddButtonContainer>
      <Button7>Add</Button7>
    </AddButtonContainer>
  );
};

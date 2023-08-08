import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "../assets/icons/FavoriteIcon.svg";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import PopcornIcon from "../assets/icons/PopcornIcon.svg";
import { useNavigate } from "react-router-dom";

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding-bottom: 30px;
`;

const GetMoreRecommendationsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const GetMoreRecommendationsButtonContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  pointer-events: none;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 10px;
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

const Button8 = styled.button`
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

export const MovieCategoriesButton = () => {
  return (
    <MovieCategoriesButtonContainer>
      <Button>Action</Button>
      <Button>Comedy</Button>
      <Button>Fantasy</Button>
      <Button>Drama</Button>
    </MovieCategoriesButtonContainer>
  );
};

export const RecommendationButton = () => {
  const navigate = useNavigate();
  const handleRecommendation = () => {
    navigate("/pages/Recommendations");
  };
  return (
    <RecommendationButtonContainer>
      <Button2 onClick={handleRecommendation}>Get Recommendations</Button2>
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
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <LoginButtonContainer>
      <Button3 onClick={handleLoginClick}>Login</Button3>
    </LoginButtonContainer>
  );
};

export const CreateAccountButton = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("./CreateAccount/");
  };

  return (
    <CreateAccountButtonContainer>
      <Button4 onClick={handleCreateAccountClick}>Create Account</Button4>
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
  const navigate = useNavigate();

  const handleRecommendationClick = () => {
    navigate("/pages/page6");
  };

  const handleProfileClick = () => {
    console.log("working");
    navigate("/MyProfile2");
  };
  return (
    <GetMoreRecommendationsButtonContainer onClick={handleRecommendationClick}>
      <IconContainer>
        <StyledIcon />
        <Icon src={FavoriteIcon} alt="favorite icon" />
        <Button5>Get More Recommendations</Button5>
        <Icon
          src={ProfileIcon}
          className="FavoriteIcon"
          alt="profile icon"
          onClick={handleProfileClick}
        />
        <Icon src={PopcornIcon} alt="popcorn icon" />
      </IconContainer>
    </GetMoreRecommendationsButtonContainer>
  );
};

export const GetMoreRecommendationButtonWithIcons2 = () => {
  const navigate = useNavigate();

  // const handleGetRecommendationClick = () => {
  //   navigate("/pages/Page3");
  //   console.log(`navigating to page 3`);
  // };

  const handlePopcornClick = () => {
    console.log("this should navigate to popcorn.js");
    navigate("/pages/page1");
  };
  return (
    <GetMoreRecommendationsButtonContainer2>
      <IconContainer>
        <StyledIcon />
        <Button8>Get More Recommendations</Button8>

        <Icon
          src={PopcornIcon}
          alt="popcorn icon"
          onClick={handlePopcornClick}
        />
      </IconContainer>
    </GetMoreRecommendationsButtonContainer2>
  );
};

export const AddButton = () => {
  return (
    <AddButtonContainer>
      <Button7>Add</Button7>
    </AddButtonContainer>
  );
};

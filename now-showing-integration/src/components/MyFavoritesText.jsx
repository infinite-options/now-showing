import React from "react";
import styled from "styled-components";
import PopcornIcon from "../assets/icons/PopcornIcon.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  width: 349px;
  height: 46px;
  border-radius: 5px;
  margin-bottom: 27px;
`;

const IconContainer = styled.div`
  padding-left: 190px;
  font-style: 20px;
`;

const MyFavorites = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #dbe3ff;
  font-family: "Merriweather", serif;
  padding-left: 19px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const MyFavoritesText = () => {
  return (
    <Container>
      <BoxContainer>
        <MyFavorites>My Favorites</MyFavorites>
        <IconContainer>
          <Icon src={PopcornIcon} alt="popcorn icon" />
        </IconContainer>
      </BoxContainer>
    </Container>
  );
};

export default MyFavoritesText;

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
  padding-left: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const IconContainer = styled.div`
  padding-left: 90px;
  padding-right: 10px;
  font-style: 20px;
`;

const MyFavorites = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #dbe3ff;
  font-family: "Merriweather", serif;
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

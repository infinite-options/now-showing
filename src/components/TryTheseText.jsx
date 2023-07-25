import React from "react";
import styled from "styled-components";
import MovieIcon from "@mui/icons-material/Movie";

//later just convert to 1 page
//use terniary to display either favorites or now showing text and icon
//as well transition for movie categories

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
`;

const BoxContainer = styled.div`
  padding-left: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const IconContainer = styled(MovieIcon)`
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

const TryTheseText = () => {
  return (
    <Container>
      <BoxContainer>
        <MyFavorites>Try These</MyFavorites>
        <IconContainer>
          <MovieIcon sx={{ fontSize: 20 }} />
        </IconContainer>
      </BoxContainer>
    </Container>
  );
};

export default TryTheseText;

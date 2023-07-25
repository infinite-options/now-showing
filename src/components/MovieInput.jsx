import React, { useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-family: sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.33);
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0 5px 0;
  flex: 1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 18px;
  max-width: 349px;
  height: 46px;
`;
const Form = styled.div`
  margin-right: 10px;
`;
const RatingSlider = styled(Slider)`
  max-width: 100px;
  /* && {
    .MuiSlider-thumb {
      background: url("../assets/icons/star.svg");
      cursor: pointer;
    }
  } */
`;

const CurrentValue = styled.p`
  margin-left: 10px;
`;
const MovieInput = (props) => {
  const { values } = props;
  const [sliderValue, setSliderValue] = useState(0);

  const handleSlider = (e, val) => {
    setSliderValue(val);
  };

  return (
    <Container>
      <InnerContainer>
        <Form>
          <form className="form-container">
            <Input
              value={values}
              name="title"
              type="text"
              placeholder="Add movie title"
            />
          </form>
        </Form>

        <RatingSlider
          value={sliderValue}
          onChange={handleSlider}
          min={0}
          max={10}
          step={1}
        ></RatingSlider>
      </InnerContainer>
      <CurrentValue>{/* <p>{sliderValue}</p> */}</CurrentValue>
    </Container>
  );
};

export default MovieInput;

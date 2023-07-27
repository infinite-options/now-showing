import React from "react";
import { Slider } from "@mui/material";
import styled from "styled-components";

const RatingSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: none;
`;

const handleSlider = (e) => {};

const MovieRatingSlider = (props) => {
  const { values } = props;
  return (
    <RatingSliderContainer>
      <Slider
        value={values}
        onChange={handleSlider}
        min={0}
        max={10}
        step={1}
        valueLabelDisplay="auto"
        aria-label="Rating"
      />
    </RatingSliderContainer>
  );
};

export default MovieRatingSlider;

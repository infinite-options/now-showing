import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";

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
  margin-left: 23px;
  margin-right: 21px;
  max-width: 349px;
  height: 46px;
  border-radius: 5px;
`;

const Form = styled.div`
  margin-right: 10px;
`;

const RatingSlider = styled(Slider)`
  max-width: 100px;
`;

const MovieInput = ({ title, sliderValue, onInputChange, onSliderChange }) => {
  const navigate = useNavigate();

  const handleSlider = (e, val) => {
    // onSliderChange(val);
  };

  const handleAddButtonClick = () => {
    if (title.trim() !== "") {
      navigate(`/page4/${encodeURIComponent(title)}`);
    }
  };

  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <Container>
      <InnerContainer>
        <Form>
          <form className="form-container">
            <Input
              value={title}
              name="title"
              type="text"
              placeholder="Add movie title"
              onChange={handleInputChange}
            />
          </form>
        </Form>
        <RatingSlider
          value={sliderValue}
          onChange={handleSlider}
          min={0}
          max={10}
          step={1}
          valueLabelDisplay="auto"
          aria-label="Rating"
        />
      </InnerContainer>
      <button onClick={handleAddButtonClick}>Add</button>
    </Container>
  );
};

export default MovieInput;

import React from "react";
import styled from "styled-components";
import Tagline from "./Tagline";
import ColorBox from "./ColorBox";
import Specifications from "./Specifications";

const CardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 40px 30px rgba(60, 49, 13, 0.15);
  border-radius: 50px;
  display: flex;
  flex: 0.45;
  padding: 25px 0px;
  justify-content: space-around;
`;

const DetailsCard = ({ currentBike, setCurrentBike }) => {
  return (
    <CardWrapper>
      <Specifications currentBike={currentBike} />
      <ColorBox currentBike={currentBike} setCurrentBike={setCurrentBike} />
      <Tagline />
    </CardWrapper>
  );
};
export default DetailsCard;

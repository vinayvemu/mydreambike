import React from "react";

import DucatiM1 from "../../../../components/Icons/DucatiM1";
import DucatiM2 from "../../../../components/Icons/DucatiM2";
import DucatiM3 from "../../../../components/Icons/DucatiM3";
import ArrowLeft from "../../../../components/Icons/ArrowLeft";
import ArrowRight from "../../../../components/Icons/ArrowRight";
import DucatiLogo from "../../../../components/Icons/Logo";
import "./BikeCSS";
import {
  Container,
  Wrapper,
  LogoWrapper,
  ModelNumber,
  ArrowWrapper,
  ImageContainer,
  BookNowTitle,
} from "./BikeCSS";

const DreamBike = ({
  activeBike,
  setActiveBike,
  setShowBookingForm,
  curretTheme,
}) => {
  const getCurrentBike = () => {
    switch (activeBike) {
      case "M1":
        return <DucatiM1 />;
      case "M2":
        return <DucatiM2 />;
      case "M3":
        return <DucatiM3 />;

      default:
        return null;
    }
  };
  const onClickLeft = () => {
    switch (activeBike) {
      case "M1":
        setActiveBike("M3");
        break;
      case "M2":
        setActiveBike("M1");
        break;
      case "M3":
        setActiveBike("M2");
        break;

      default:
        setActiveBike("M1");
        break;
    }
  };
  const onClickRight = () => {
    switch (activeBike) {
      case "M1":
        setActiveBike("M2");
        break;
      case "M2":
        setActiveBike("M3");
        break;
      case "M3":
        setActiveBike("M1");
        break;

      default:
        setActiveBike("M1");
        break;
    }
  };
  const getModelNum = () => {
    switch (activeBike) {
      case "M1":
        return <ModelNumber>797</ModelNumber>;
      case "M2":
        return <ModelNumber>821</ModelNumber>;
      case "M3":
        return <ModelNumber>797</ModelNumber>;

      default:
        return null;
    }
  };
  const color = curretTheme == "light" ? "#8c8c8c" : "#ffffff";
  return (
    <Container>
      <LogoWrapper>
        <DucatiLogo />
        {getModelNum()}
      </LogoWrapper>
      <Wrapper>
        {/* <ArrowWrapper>
          <ArrowLeft onClick={() => onClickLeft()} color={color} />
        </ArrowWrapper> */}
        <ImageContainer>
          <BookNowTitle onClick={() => setShowBookingForm(true)}>
            book now
          </BookNowTitle>
          {getCurrentBike()}
        </ImageContainer>

        {/* <ArrowWrapper>
          <ArrowRight onClick={() => onClickRight()} color={color} />
        </ArrowWrapper> */}
      </Wrapper>
    </Container>
  );
};
export default DreamBike;

import React from "react";

import DucatiM1 from "../../components/Icons/DucatiM1";
import DucatiM2 from "../../components/Icons/DucatiM2";
import DucatiM3 from "../../components/Icons/DucatiM3";
import ArrowLeft from "../../components/Icons/ArrowLeft";
import ArrowRight from "../../components/Icons/ArrowRight";
import DucatiLogo from "../../components/Icons/Logo";
import "../../style.css";
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
  currentBike,
  setCurrentBike,
  setShowDrawer,
  curretTheme,
}) => {
  const getCurrentBike = () => {
    switch (currentBike) {
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
    switch (currentBike) {
      case "M1":
        setCurrentBike("M3");
        break;
      case "M2":
        setCurrentBike("M1");
        break;
      case "M3":
        setCurrentBike("M2");
        break;

      default:
        setCurrentBike("M1");
        break;
    }
  };
  const onClickRight = () => {
    switch (currentBike) {
      case "M1":
        setCurrentBike("M2");
        break;
      case "M2":
        setCurrentBike("M3");
        break;
      case "M3":
        setCurrentBike("M1");
        break;

      default:
        setCurrentBike("M1");
        break;
    }
  };
  const getModelNum = () => {
    switch (currentBike) {
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
          <BookNowTitle onClick={() => setShowDrawer(true)}>
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

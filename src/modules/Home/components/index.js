import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./partials/Header";
import Details from "./Details";
import DreamBike from "./Bike";

import BookNow from "../../Booking/container/index";
import ThemeChangeButton from "../../Theme/components/ThemeChangeButton";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 5% 30px 5%;
  justify-content: space-between;
`;

const Home = ({
  currentTheme,
  activeBike,
  setActiveBike,
  setShowBookingForm,
  setCurrentTheme,
}) => {
  return (
    <Wrapper>
      <Header currentTheme={currentTheme} setActiveBike={setActiveBike} />
      <DreamBike
        activeBike={activeBike}
        setActiveBike={setActiveBike}
        currentTheme={currentTheme}
        setShowBookingForm={setShowBookingForm}
      />
      <Details activeBike={activeBike} setActiveBike={setActiveBike} />

      <BookNow />
      <ThemeChangeButton setCurrentTheme={setCurrentTheme} />
    </Wrapper>
  );
};
export default Home;

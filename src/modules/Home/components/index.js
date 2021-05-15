import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./partials/Header";
import Details from "./Details";
import DreamBike from "./Bike";

import BookNow from "../../Booking/container/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 5% 30px 5%;
  justify-content: space-between;
`;

const Home = ({
  curretTheme,
  activeBike,
  setActiveBike,
  setShowBookingForm,
}) => {
  return (
    <Wrapper>
      <Header curretTheme={curretTheme} setActiveBike={setActiveBike} />
      <DreamBike
        activeBike={activeBike}
        setActiveBike={setActiveBike}
        curretTheme={curretTheme}
        setShowBookingForm={setShowBookingForm}
      />
      <Details activeBike={activeBike} setActiveBike={setActiveBike} />

      <BookNow />
    </Wrapper>
  );
};
export default Home;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./partials/Header";
import Details from "./Details";
import DreamBike from "./Bike";

import BookNow from "./BookNow";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 5% 30px 5%;
  justify-content: space-between;
`;

const Home = ({ curretTheme }) => {
  const [currentBike, setCurrentBike] = useState("M1");
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    setShowDrawer(false);
  }, [currentBike]);

  return (
    <Wrapper>
      <Header curretTheme={curretTheme} setCurrentBike={setCurrentBike} />
      <DreamBike
        currentBike={currentBike}
        setCurrentBike={setCurrentBike}
        setShowDrawer={setShowDrawer}
        curretTheme={curretTheme}
      />
      <Details currentBike={currentBike} setCurrentBike={setCurrentBike} />

      {showDrawer && (
        <BookNow
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          currentBike={currentBike}
        />
      )}
    </Wrapper>
  );
};
export default Home;

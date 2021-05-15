import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./partials/Header";
import Details from "./Details";
import DreamBike from "./Bike";
import { Drawer } from "antd";
import ThemeChange from "./ThemeChange";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 5% 30px 5%;
  justify-content: space-between;
`;

const Home = ({ setCurrentTheme, curretTheme }) => {
  const [currentBike, setCurrentBike] = useState("M1");
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    setShowDrawer(false);
  }, [currentBike]);

  return (
    <Wrapper>
      <Header curretTheme={curretTheme} />
      <DreamBike
        currentBike={currentBike}
        setCurrentBike={setCurrentBike}
        setShowDrawer={setShowDrawer}
        curretTheme={curretTheme}
      />
      <Details currentBike={currentBike} setCurrentBike={setCurrentBike} />
      {showDrawer && (
        <Drawer
          visible={showDrawer}
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={() => setShowDrawer(false)}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <p>Some contents...</p>
        </Drawer>
      )}
      <ThemeChange setCurrentTheme={setCurrentTheme} />
    </Wrapper>
  );
};
export default Home;

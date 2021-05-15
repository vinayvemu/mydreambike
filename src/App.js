import React, { useState } from "react";
import Home from "./modules/Home/container/index";
import styled from "styled-components";
import "antd/dist/antd.css";
import ThemeChange from "./utils/ThemeChange";

const App = () => {
  const [curretTheme, setCurrentTheme] = useState("light");

  const getBackground = () => {
    switch (curretTheme) {
      case "light":
        return "#f0f8ff";

      case "dark":
        return "#141414";

      default:
        return "#f0f8ff";
    }
  };
  const PageWrapper = styled.div`
    height: 100%;
    display: block;
    overflow: auto;
    background: ${getBackground()}; //linear-gradient(45deg, black, rgb(60 49 13 / 15%));
  `;
  return (
    <PageWrapper>
      <Home setCurrentTheme={setCurrentTheme} curretTheme={curretTheme} />
      <ThemeChange setCurrentTheme={setCurrentTheme} />
    </PageWrapper>
  );
};
export default App;

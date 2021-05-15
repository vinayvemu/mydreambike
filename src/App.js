import React from "react";
import Home from "./modules/Home/container/index";
import styled from "styled-components";

const App = () => {
  const PageWrapper = styled.div`
    height: 100%;
    display: block;
    overflow: auto;
    background: #141414; // linear-gradient(45deg, #141414, rgb(60 49 13 / 15%));
  `;

  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  );
};
export default App;

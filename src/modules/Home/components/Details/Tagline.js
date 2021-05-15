import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  width: 341px;
  font-family: cursive;
  font-style: italic;
  font-weight: normal;
  font-size: 40px;
  line-height: 51px;
  letter-spacing: 0.135em;
  color: #707070;
  margin-top: auto;
  margin-bottom: 50px;
`;

const Tagline = () => {
  return <TextWrapper>Fresh vibes. Sporty soul.</TextWrapper>;
};
export default Tagline;

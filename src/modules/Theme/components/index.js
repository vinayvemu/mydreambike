import React from "react";
import styled from "styled-components";

const DynamicTheme = ({ currentTheme, children }) => {
  const getBackground = () => {
    switch (currentTheme) {
      case "light":
        return "#f0f8ff";

      case "dark":
        return "#141414";

      default:
        return currentTheme;
    }
  };
  const StyledArea = styled.div`
    background-color: ${getBackground()};
  `;
  return <StyledArea>{children}</StyledArea>;
};
export default DynamicTheme;

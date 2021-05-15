import React from "react";
import styled from "styled-components";
import MenuIcon from "../../components/Icons/Menu";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
`;

const Header = ({ curretTheme }) => {
  const color = curretTheme == "light" ? "#141414" : "#ffffff";
  const Info = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.085em;
    color: ${color};
  `;
  return (
    <Wrapper>
      <MenuIcon color={color} />
      <Info>INTERNATIONAL WEBSITE | MY DUCATI</Info>
    </Wrapper>
  );
};
export default Header;

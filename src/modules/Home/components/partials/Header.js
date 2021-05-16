import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../../components/Icons/Menu";
import { Menu, Dropdown } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
`;
const Item = styled(Menu.Item)`
  background-color: transparent !important;
  border-bottom: 1px solid #e4e7ea;
  cursor: pointer;
  color: #141414;
  &:hover {
    color: #1b63a9;
  }
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const Header = ({ currentTheme, setActiveBike }) => {
  const [showMenu, setShowMenu] = useState(false);

  const color = currentTheme == "light" ? "#141414" : "#ffffff";
  const menu = (
    <Menu>
      <Item key="M1" onClick={(e) => setActiveBike(e.key)}>
        Ducati M1
      </Item>
      <Item key="M2" onClick={(e) => setActiveBike(e.key)}>
        Ducati M2
      </Item>
      <Item key="M3" onClick={(e) => setActiveBike(e.key)}>
        Ducati M3
      </Item>
    </Menu>
  );
  const Info = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.085em;
    color: ${color};
  `;
  return (
    <Wrapper onClick={() => setShowMenu(!showMenu)}>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        placement="topLeft"
        visible={showMenu}
        style={{ marginLeft: " 8%", left: "0px", top: "25px" }}
      >
        <MenuIcon color={color} onClick={() => setShowMenu(!showMenu)} />
      </Dropdown>

      <Info>
        INTERNATIONAL WEBSITE &nbsp;
        <a href="https://www.ducati.com/in/en/home" target="_blank">
          &nbsp; MY DUCATI
        </a>
      </Info>
    </Wrapper>
  );
};
export default Header;

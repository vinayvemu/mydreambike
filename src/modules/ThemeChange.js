import React from "react";
import styled from "styled-components";
import ChangeTheme from "../components/Icons/ChangeTheme";
import { Menu, Dropdown } from "antd";

const Theme = styled.div`
  display: flex;
  float: right;
  border-radius: 50%;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  color: #000;
  transition: color 0.3s;
  cursor: pointer;
  margin-left: auto;
  margin-right: -5%;
  margin-top: -5%;
`;
const IconWrapper = styled.span`
  padding-top: 5px;
  cursor: pointer;
  margin: 10px;
`;
const Item = styled(Menu.Item)`
  background-color: transparent !important;
  border-bottom: 1px solid grey;
  cursor: pointer;
  &:hover {
    color: #1b63a9;
  }
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const ThemeChange = ({ setCurrentTheme }) => {
  const menu = (
    <Menu>
      <Item key="light" onClick={(e) => setCurrentTheme(e.key)}>
        Light Theme
      </Item>
      <Item key="dark" onClick={(e) => setCurrentTheme(e.key)}>
        Dark Theme
      </Item>
      {/* <Item key="custom" onClick={(e) => setCurrentTheme(e.key)}>
        Custom Theme
      </Item> */}
    </Menu>
  );
  return (
    <Theme>
      <Dropdown overlay={menu} trigger={["click"]} placement="topLeft">
        <IconWrapper>
          <ChangeTheme />
        </IconWrapper>
      </Dropdown>
    </Theme>
  );
};
export default ThemeChange;

import React, { useState, Fragment } from "react";
import styled from "styled-components";
import ChangeTheme from "../../../components/Icons/ChangeTheme";
import { Menu, Dropdown, Input } from "antd";
import ColorPickerIcon from "../../../components/Icons/ColorPicker";

const Theme = styled.div`
  display: flex;
  position: absolute;
  bottom: 15;
  background: #fff;
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
  left: 96%;
`;
const IconWrapper = styled.span`
  padding-top: 5px;
  cursor: pointer;
  margin: 10px;
`;
const Item = styled(Menu.Item)`
  background-color: transparent !important;
  border-bottom: 1px solid #e4e7ea;
  cursor: pointer;
  &:hover {
    color: #1b63a9;
  }
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const SubContainer = styled.div`
  bottom: 0;
  height: 0px;
  width: 0px;
`;

const StyledInput = styled(Input)`
  z-index: -1;
  height: 0px;
  padding: 0px;
  line-height: 0;
  border: 0px;
  width: 0px;
`;

const ThemeChangeButton = ({ setCurrentTheme }) => {
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [colorValue, setColorValue] = useState("");

  const handleBackgroundChange = (event) => {
    setColorValue(event.target.value);
  };
  const handleBackgroundBlur = () => {
    setCurrentTheme(colorValue);
  };
  const menu = (
    <Menu>
      <Item key="light" onClick={(e) => setCurrentTheme(e.key)}>
        Light Theme
      </Item>
      <Item key="dark" onClick={(e) => setCurrentTheme(e.key)}>
        Dark Theme
      </Item>
      <Item
        key="custom"
        onClick={(e) => setShowCustomPicker(true)}
        htmlFor={"colorPicker1"}
      >
        <label
          htmlFor={"colorPicker"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Custom Theme &nbsp; <ColorPickerIcon color={colorValue} />
        </label>

        <SubContainer>
          <StyledInput
            id="colorPicker"
            type="color"
            value={colorValue}
            onChange={(event) => handleBackgroundChange(event)}
            onBlur={() => handleBackgroundBlur()}
          />
        </SubContainer>
      </Item>
    </Menu>
  );
  return (
    <Fragment>
      <Theme>
        <Dropdown
          onClick={() => setShowDropdown(true)}
          overlay={menu}
          trigger={["click"]}
          placement="topLeft"
          visible={showCustomPicker || showDropdown}
        >
          <IconWrapper>
            <ChangeTheme />
          </IconWrapper>
        </Dropdown>
      </Theme>
    </Fragment>
  );
};
export default ThemeChangeButton;

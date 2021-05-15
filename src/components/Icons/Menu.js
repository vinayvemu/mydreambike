import React from "react";

const MenuIcon = ({ color }) => (
  <svg
    width="32"
    height="22"
    viewBox="0 0 32 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="2" fill={color || "white"} />
    <rect y="10" width="32" height="2" fill={color || "white"} />
    <rect y="20" width="32" height="2" fill={color || "white"} />
  </svg>
);

export default MenuIcon;

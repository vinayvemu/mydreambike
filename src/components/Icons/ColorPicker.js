import React from "react";

const ColorPickerIcon = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" stroke="#E4E7EA" />
      <circle cx="16" cy="16" r="11" fill={color} />
    </svg>
  );
};

export default ColorPickerIcon;

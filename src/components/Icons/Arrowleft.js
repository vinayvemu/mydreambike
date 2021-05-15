import React from "react";

const ArrowLeft = ({ onClick, color }) => (
  <svg
    width="75"
    height="79"
    viewBox="0 0 75 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <path
      d="M39.6448 74.7107L4.28944 39.3553L39.6448 4"
      stroke={color || "#F4F4F4"}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeft;

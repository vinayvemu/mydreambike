import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GridRow = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 50px;
`;

const InactiveCB = styled.div`
  margin: 30px;
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.15));
  border-radius: 16px;
  background: ${(props) => props.background};
  cursor: pointer;
`;

const ActiveCB = styled.div`
  margin: 25px;
  width: 90px;
  height: 90px;
  filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.75));
  border-radius: 16px;
  background: ${(props) => props.background};
  cursor: pointer;
`;

const ColorBox = ({ currentBike, setCurrentBike }) => {
  const colors = ["#DF1F26", "#141414", "#E4E4E4"];
  const [currentColor, setCurrentColor] = useState("");
  useEffect(() => {
    switch (currentBike) {
      case "M1":
        setCurrentColor("#DF1F26");
        break;
      case "M2":
        setCurrentColor("#141414");
        break;
      case "M3":
        setCurrentColor("#E4E4E4");
        break;

      default:
        setCurrentColor("");
        break;
    }
  }, [currentBike]);
  const onClick = (color) => {
    switch (color) {
      case "#DF1F26":
        setCurrentBike("M1");
        break;
      case "#141414":
        setCurrentBike("M2");
        break;
      case "#E4E4E4":
        setCurrentBike("M3");
        break;

      default:
        break;
    }
  };
  console.log("currentColor", currentBike, currentColor);

  return (
    <GridRow>
      {colors.map((color) =>
        color == currentColor ? (
          <ActiveCB background={color} onClick={() => onClick(color)} />
        ) : (
          <InactiveCB background={color} onClick={() => onClick(color)} />
        )
      )}
    </GridRow>
  );
};
export default ColorBox;

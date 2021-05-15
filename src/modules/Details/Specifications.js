import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;
const DataWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 11px;
`;
const Label = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  color: #181818;
`;
const Data = styled.div`
  font-family: system-ui;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 121%;
  letter-spacing: 0.095em;
  color: #181818;
`;

const Specifications = ({ currentBike }) => {
  const specificationsData = [
    {
      name: "M1",
      Displacement: "803 cc",
      HorsePower: "73 hp (54kW)",
      Torque: "67 Nm (49.0 lb-ft)",
      DryWeigt: "175 Kg (386 lb)",
      SeatHeight: "805 mm (31.69 in)",
      Saftey: "ABS",
    },
    {
      name: "M2",
      Displacement: "821 cc",
      HorsePower: "109 hp (80kW)",
      Torque: "86 Nm (63 lb-ft)",
      DryWeigt: "180 Kg (398 lb)",
      SeatHeight: "805 mm (31.69 in)",
      Saftey: "ABS",
    },
    {
      name: "M3",
      Displacement: "803 cc",
      HorsePower: "73 hp (54kW)",
      Torque: "67 Nm (49.0 lb-ft)",
      DryWeigt: "175 Kg (386 lb)",
      SeatHeight: "805 mm (31.69 in)",
      Saftey: "ABS",
    },
  ];

  const [activeBike, setActiveBike] = useState({});

  useEffect(() => {
    if (currentBike) {
      let selectedBike =
        specificationsData.filter((item) => item.name == currentBike) || {};
      setActiveBike(selectedBike.length > 0 ? selectedBike[0] : {});
    }
  }, [currentBike]);

  return (
    <Wrapper>
      {Object.keys(activeBike).map((item, idx) => {
        return (
          <DataWrapper key={idx}>
            <Label>{item}</Label>
            <Data>{activeBike[item]}</Data>
          </DataWrapper>
        );
      })}
    </Wrapper>
  );
};
export default Specifications;

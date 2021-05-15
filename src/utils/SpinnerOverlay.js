import React from "react";
import styled from "styled-components";

import Flex from "../components/Flex";
import Spinner from "../components/Spinner";
import { Spin } from "antd";
const OverlayWrapper = styled(Flex)`
  position: absolute;
  background: ${(props) =>
    props.spin ? "rgb(250 250 251 / 35%)" : "rgba(68, 68, 68, 0.7)"};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const LoadingOverlay = ({ spin }) => (
  <OverlayWrapper center centerVertically spin={spin}>
    {spin ? <Spin /> : <Spinner />}
  </OverlayWrapper>
);

export default LoadingOverlay;

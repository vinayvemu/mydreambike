import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  border: 16px solid;
  border-top: 16px solid;
  border-radius: 50%;
  animation: ${spin} 750ms linear infinite;
  border-width: 2px;
  pointer-events: none;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  ${(props) =>
    props.inverted
      ? `
    border-color: #dfdfdd;
    border-top-color: #fff;
    `
      : `
    border-color: #a9a9a9;
    border-top-color: #000;
    `}
`;

Spinner.defaultProps = {
  size: 32,
};

export default Spinner;

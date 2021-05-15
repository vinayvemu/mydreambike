import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: -15%;
  position: sticky;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  flex-grow: 0;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  margin-bottom: -17%;
  margin-left: -5%;
  position: sticky;
  align-items: center;
`;
const ModelNumber = styled.div`
  font-family: system-ui;
  font-style: normal;
  font-weight: 600;
  font-size: 200px;
  line-height: 240px;
  color: #ffffff;
  text-shadow: 0px 4px 32px rgba(0, 0, 0, 0.6);
`;
const ArrowWrapper = styled.div`
  align-items: center;
  padding: 2%;
  &:hover {
    border-radius: 50%;
    opacity: 0.9;
    background: #2e2e2e;
    border: 1.5px solid;
    -webkit-transition: 0.5s;
  }
`;

const BookNowTitle = styled.div`
  position: absolute;
  width: 500px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  z-index: 1;
  top: 50%;
  left: 25%;
  opacity: 0;
  border: solid 2px white;
  transition: top 0.5s ease;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${BookNowTitle} {
      opacity: 1;
    }
  }
`;

export {
  Container,
  Wrapper,
  LogoWrapper,
  ModelNumber,
  ArrowWrapper,
  ImageContainer,
  BookNowTitle,
};

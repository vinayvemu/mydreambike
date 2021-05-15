import styled from "styled-components";

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e4e7ea;
  padding: 10px 16px;
  background: #fff;
  text-align: right;
  z-index: ${(props) => props.footerStyles && "1050"};
`;

export default Footer;

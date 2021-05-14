import React from 'react';
import styled from 'styled-components';
import Background from '../components/Icons/Background';
const PageWrapper = styled.div`
  padding: 30px 30px 0 0;
  display: inline-block;
  background-image: url(${props => props.backgroungImage});
`;
export default function App() {
  return (
    <PageWrapper backgroungImage={Background}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </PageWrapper>
  );
}

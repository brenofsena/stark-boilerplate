import React from "react";
import styled from "styled-components";
import StarkLogo from "./images/stark.png";

const Wrapper = styled.section`
  padding: 4em;
  background: #f9f9f9;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  margin: 1em auto;
  display: block;
`;

const App = () => (
  <Wrapper>
    <Image src={StarkLogo} alt="Stark Boilerplate" title="Stark Boilerplate" />
  </Wrapper>
);

export default App;

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4em;
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Image = styled.img`
  margin: 1em auto;
  display: block;
`;

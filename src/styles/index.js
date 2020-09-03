import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#5D0C09',
    secondary: '#C4974F',
    background: '#fafafa',
    white: '#fff',
    black: '#000',
    gray: '#959595',
    green: '#4caf50',
  },
  borderRadius: '8px',
  font: {
    fontFamily: 'Roboto',
    regular: 400,
    medium: 500,
    bold: 700,
  },
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75.5%;
  }

  body{
    font-family: ${theme.font.fontFamily}
  }
`;

export { GlobalStyle, theme };

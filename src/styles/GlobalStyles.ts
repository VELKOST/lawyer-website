import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2B3674;
    --secondary-color: #A3AED0;
    --accent-color: #4318FF;
    --background: #FFFFFF;
    --text-primary: #2B3674;
    --text-secondary: #A3AED0;
    --error-color: #FF0000;
    --success-color: #00FF00;
    
    --container-width: 1200px;
    --header-height: 80px;
    
    --font-main: 'Roboto', sans-serif;
    --font-secondary: 'Playfair Display', serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-main);
    color: var(--text-primary);
    background: var(--background);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
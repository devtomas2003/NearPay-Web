import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html, body, #root{
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
}
body{
    background: var(--dark);
}
:root{
    --dark: #121212;
    --darkLight: #3C464C;
    --white: #FFF;
    --primary: #50CF80;
    --secundary: #6C63FF;
    --hoverLight: #50cf70;
    --hoverDark: #6c63f5;
}
`;
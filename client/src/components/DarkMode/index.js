import React, { useState } from "react";
import "../../App.css";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./themes.js";


import Button from "@mui/material/Button";



const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Dark () {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <StyledApp>
        


      <Button 
        variant="outlined" 
        color="primary" 
        onClick={() => themeToggler()}
        >Press !</Button>

      </StyledApp>
    </ThemeProvider>
  );
}

export default Dark;

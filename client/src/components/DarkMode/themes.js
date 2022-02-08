import { createGlobalStyle } from "styled-components";

export const LightTheme = {
    // fontColor: "#1D2A0E",
    body: "#ffc0cb",

};

export const DarkTheme = {
  body: "#0A1929",
  // fontColor: "#ffffff",

};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;

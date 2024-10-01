import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --font-thin: var(--montserrat-alternates-thin);
  --font-extralight: var(--montserrat-alternates-extralight);
  --font-light: var(--montserrat-alternates-light);
  --font-regular: var(--montserrat-alternates-regular);
  --font-medium: var(--montserrat-alternates-medium);
  --font-semibold: var(--montserrat-alternates-semibold);
  --font-bold: var(--montserrat-alternates-bold);
  --font-extrabold: var(--montserrat-alternates-extrabold);
  --font-black: var(--montserrat-alternates-black);
  --font-thin-italic: var(--montserrat-alternates-thin-italic);
  --font-extralight-italic: var(--montserrat-alternates-extraLight-italic);
  --font-light-italic: var(--montserrat-alternates-light-italic);
  --font-italic: var(--montserrat-alternates-italic);
  --font-medium-italic: var(--montserrat-alternates-medium-italic);
  --font-semibold-italic: var(--montserrat-alternates-semibold-italic);
  --font-bold-italic: var(--montserrat-alternates-bold-italic);
  --font-extrabold-italic: var(--montserrat-alternates-extrabold-italic);
  --font-black-italic: var(--montserrat-alternates-ilack-italic);

  --font-alternative: var(--questrial-regular);

  font-family: var(--font-regular);
  font-style: normal;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

:root.light-theme {
    --primary: #eb5e28;
  --secondary: #e8e0b4;
  --tertiary: #262626;
  --quaternary: #505050;
  --quinary: #f0f3dd;
  --senary: #ffffff;
  --septenary: #efefef;
  --octonary: #e0e0e0;
  --nonary: #d0d0d0;
  --denary: #c0c0c0;

  /* #FFFFFF
#CCCCCC
#AAAAAA */

  --background-primary: var(--quinary);
  --background-secondary: var(--senary);

  --font-primary: var(--tertiary);
  --font-secondary: var(--senary);
  --font-tertiary: var(--quaternary);
  --font-emphazis: var(--primary);

  --shadow-color: rgba(0, 0, 0, 0.25);

  --icon-primary: var(--quaternary);
}

:root.dark-theme {
  --primary: #f80;
  --secondary: #1c1c1c;
  --tertiary: #cfcfcf;
  --quaternary: #c0c0c0;
  --quinary: #121212;
  --senary: #262626;
  --septenary: #3a3a3a;
  --octonary: #4f4f4f;
  --nonary: #5f5f5f;
  --denary: #6f6f6f;

  --background-primary: var(--quinary);
  --background-secondary: var(--senary);

  --font-primary: var(--tertiary);
  --font-secondary: var(--senary);
  --font-tertiary: var(--quaternary);
  --font-emphazis: var(--primary);

  --shadow-color: rgba(0, 0, 0, 0.25);

  --icon-primary: var(--quaternary);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background-color: var(--background-primary);
}

main {
  display: block;
}

h1 {
  font-size: 2em;
}

hr {
  height: 0;
  overflow: visible;
}

li {
  list-style: none;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

legend {
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import Questrial from "../assets/fonts/Questrial/Questrial-Regular.ttf";

const FontQuestrial = createGlobalStyle`
  @font-face {
    font-family: 'Questrial';
    src: local('Questrial'), local('Questrial'), url(${Questrial});
  }

  :root {
    --questrial-regular: 'Questrial', sans-serif;
  }
`;

export default FontQuestrial;
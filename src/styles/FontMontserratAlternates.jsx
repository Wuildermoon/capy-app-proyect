import { createGlobalStyle } from "styled-components";
import MontserratAlternates_Thin from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Thin.ttf";
import MontserratAlternates_ExtraLight from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLight.ttf";
import MontserratAlternates_Light from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf";
import MontserratAlternates_Regular from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf";
import MontserratAlternates_Medium from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf";
import MontserratAlternates_SemiBold from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf";
import MontserratAlternates_Bold from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf";
import MontserratAlternates_ExtraBold from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBold.ttf";
import MontserratAlternates_Black from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Black.ttf";
import MontserratAlternates_ThinItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-ThinItalic.ttf";
import MontserratAlternates_ExtraLightItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLightItalic.ttf";
import MontserratAlternates_LightItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-LightItalic.ttf";
import MontserratAlternates_Italic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-Italic.ttf";
import MontserratAlternates_MediumItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-MediumItalic.ttf";
import MontserratAlternates_SemiBoldItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-SemiBoldItalic.ttf";
import MontserratAlternates_BoldItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-BoldItalic.ttf";
import MontserratAlternates_ExtraBoldItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBoldItalic.ttf";
import MontserratAlternates_BlackItalic from "../assets/fonts/Montserrat_Alternates/MontserratAlternates-BlackItalic.ttf";

const FontMontserratAlternates = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat Alternates Thin';
    src: local('Montserrat Alternates Thin'), local('Montserrat-Alternates-Thin'), url(${MontserratAlternates_Thin});
  }

  @font-face {
    font-family: 'Montserrat Alternates ExtraLight';
    src: local('Montserrat Alternates ExtraLight'), local('Montserrat-Alternates-ExtraLight'), url(${MontserratAlternates_ExtraLight});
  }

  @font-face {
    font-family: 'Montserrat Alternates Light';
    src: local('Montserrat Alternates Light'), local('Montserrat-Alternates-Light'), url(${MontserratAlternates_Light});
  }

  @font-face {
    font-family: 'Montserrat Alternates Regular';
    src: local('Montserrat Alternates Regular'), local('Montserrat-Alternates-Regular'), url(${MontserratAlternates_Regular});
  }

  @font-face {
    font-family: 'Montserrat Alternates Medium';
    src: local('Montserrat Alternates Medium'), local('Montserrat-Alternates-Medium'), url(${MontserratAlternates_Medium});
  }

  @font-face {
    font-family: 'Montserrat Alternates SemiBold';
    src: local('Montserrat Alternates SemiBold'), local('Montserrat-Alternates-SemiBold'), url(${MontserratAlternates_SemiBold});
  }

  @font-face {
    font-family: 'Montserrat Alternates Bold';
    src: local('Montserrat Alternates Bold'), local('Montserrat-Alternates-Bold'), url(${MontserratAlternates_Bold});
  }

  @font-face {
    font-family: 'Montserrat Alternates ExtraBold';
    src: local('Montserrat Alternates ExtraBold'), local('Montserrat-Alternates-ExtraBold'), url(${MontserratAlternates_ExtraBold});
  }

  @font-face {
    font-family: 'Montserrat Alternates Black';
    src: local('Montserrat Alternates Black'), local('Montserrat-Alternates-Black'), url(${MontserratAlternates_Black});
  }

  @font-face {
    font-family: 'Montserrat Alternates Thin Italic';
    src: local('Montserrat Alternates Thin Italic'), local('Montserrat-Alternates-ThinItalic'), url(${MontserratAlternates_ThinItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates ExtraLight Italic';
    src: local('Montserrat Alternates ExtraLight Italic'), local('Montserrat-Alternates-ExtraLightItalic'), url(${MontserratAlternates_ExtraLightItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates Light Italic';
    src: local('Montserrat Alternates Light Italic'), local('Montserrat-Alternates-LightItalic'), url(${MontserratAlternates_LightItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates Italic';
    src: local('Montserrat Alternates Italic'), local('Montserrat-Alternates-Italic'), url(${MontserratAlternates_Italic});
  }

  @font-face {
    font-family: 'Montserrat Alternates Medium Italic';
    src: local('Montserrat Alternates Medium Italic'), local('Montserrat-Alternates-MediumItalic'), url(${MontserratAlternates_MediumItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates SemiBold Italic';
    src: local('Montserrat Alternates SemiBold Italic'), local('Montserrat-Alternates-SemiBoldItalic'), url(${MontserratAlternates_SemiBoldItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates Bold Italic';
    src: local('Montserrat Alternates Bold Italic'), local('Montserrat-Alternates-BoldItalic'), url(${MontserratAlternates_BoldItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates ExtraBold Italic';
    src: local('Montserrat Alternates ExtraBold Italic'), local('Montserrat-Alternates-ExtraBoldItalic'), url(${MontserratAlternates_ExtraBoldItalic});
  }

  @font-face {
    font-family: 'Montserrat Alternates Black Italic';
    src: local('Montserrat Alternates Black Italic'), local('Montserrat-Alternates-BlackItalic'), url(${MontserratAlternates_BlackItalic});
  }

  :root {
    --montserrat-alternates-thin: 'Montserrat Alternates Thin', sans-serif;
    --montserrat-alternates-extralight: 'Montserrat Alternates ExtraLight', sans-serif;
    --montserrat-alternates-light: 'Montserrat Alternates Light', sans-serif;
    --montserrat-alternates-regular: 'Montserrat Alternates Regular', sans-serif;
    --montserrat-alternates-medium: 'Montserrat Alternates Medium', sans-serif;
    --montserrat-alternates-semibold: 'Montserrat Alternates SemiBold', sans-serif;
    --montserrat-alternates-bold: 'Montserrat Alternates Bold', sans-serif;
    --montserrat-alternates-extrabold: 'Montserrat Alternates ExtraBold', sans-serif;
    --montserrat-alternates-black: 'Montserrat Alternates Black', sans-serif;
    --montserrat-alternates-thin-italic: 'Montserrat Alternates Thin Italic', sans-serif;
    --montserrat-alternates-extralight-italic: 'Montserrat Alternates ExtraLight Italic', sans-serif;
    --montserrat-alternates-light-italic: 'Montserrat Alternates Light Italic', sans-serif;
    --montserrat-alternates-italic: 'Montserrat Alternates Italic', sans-serif;
    --montserrat-alternates-medium-italic: 'Montserrat Alternates Medium Italic', sans-serif;
    --montserrat-alternates-semibold-italic: 'Montserrat Alternates SemiBold Italic', sans-serif;
    --montserrat-alternates-bold-italic: 'Montserrat Alternates Bold Italic', sans-serif;
    --montserrat-alternates-extrabold-italic: 'Montserrat Alternates ExtraBold Italic', sans-serif;
    --montserrat-alternates-black-italic: 'Montserrat Alternates Black Italic', sans-serif;
  }
`;

export default FontMontserratAlternates;

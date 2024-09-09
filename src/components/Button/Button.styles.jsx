import styled from "styled-components";
import { getCSSVarValue } from "../../utils/utils";

const StyledButton = styled.button`
  /* mobile */
  font-family: ${({ $fontFamily }) =>
    getCSSVarValue($fontFamily) || "var(--font-regular)"};
  height: ${({ $height }) => getCSSVarValue($height) || "auto"};
  width: ${({ $width }) => getCSSVarValue($width) || "auto"};
  display: ${({ $display }) => getCSSVarValue($display) || "flex"};
  flex-flow: ${({ $flexFlow }) => getCSSVarValue($flexFlow) || "row wrap"};
  align-items: ${({ $alignItems }) => getCSSVarValue($alignItems) || "center"};
  justify-content: ${({ $justifyContent }) =>
    getCSSVarValue($justifyContent) || "center"};
  gap: ${({ $gap }) => getCSSVarValue($gap) || "4px"};
  padding: ${({ $padding }) => getCSSVarValue($padding) || "auto"};
  background: ${({ $background }) =>
    getCSSVarValue($background) || "transparent"};
  box-shadow: ${({ $shadow }) => ($shadow ? getCSSVarValue($shadow) : "none")};
  border-radius: ${({ $borderRadius }) =>
    getCSSVarValue($borderRadius) || "transparent"};
  border: ${({ $borderWidth, $borderStyle, $borderColor }) =>
    `${getCSSVarValue($borderWidth)} ${getCSSVarValue($borderStyle)} ${
      getCSSVarValue($borderColor) || "1px solid transparent"
    }`};
  color: ${({ $fontColor }) => getCSSVarValue($fontColor) || "var(--tertiary)"};
  font-weight: ${({ $fontWeight }) => getCSSVarValue($fontWeight) || "400"};
  font-size: ${({ $fontSize }) => getCSSVarValue($fontSize) || "14px"};
  text-align: ${({ $textAlign }) => getCSSVarValue($textAlign) || "center"};
  cursor: pointer;
  transition: 200ms ease-in-out;

  /* hover */
  &:hover,
  &:focus {
    background: ${({ $hoverBackground }) =>
      getCSSVarValue($hoverBackground) || ""};
    box-shadow: ${({ $hoverShadow }) =>
      $hoverShadow ? getCSSVarValue($hoverShadow) : "none"};
    border: ${({ $hoverBorderWidth, $hoverBorderStyle, $hoverBorderColor }) =>
      `${getCSSVarValue($hoverBorderWidth)} ${getCSSVarValue(
        $hoverBorderStyle,
      )} ${getCSSVarValue($hoverBorderColor) || ""}`};
    color: ${({ $hoverFontColor }) => getCSSVarValue($hoverFontColor) || ""};
    font-weight: ${({ $hoverFontWeight }) =>
      getCSSVarValue($hoverFontWeight) || ""};
    font-size: ${({ $hoverFontSize }) => getCSSVarValue($hoverFontSize) || ""};
  }

  /* mobile large */
  @media (480px <= width < 768px) {
    gap: ${({ $gap }) => getCSSVarValue($gap) || "6px"};
  }

  /* tablet */
  @media (768px <= width < 960px) {
    height: ${({ $height }) => getCSSVarValue($height) || "auto"};
    width: ${({ $width }) => getCSSVarValue($width) || "auto"};
    font-size: ${({ $fontSize }) => getCSSVarValue($fontSize) || "14px"};
    gap: ${({ $gap }) => getCSSVarValue($gap) || "8px"};
    padding: ${({ $padding }) => getCSSVarValue($padding) || "6px"};
  }

  /* laptop */
  @media (960px <= width < 1400px) {
    height: ${({ $height }) => getCSSVarValue($height) || "auto"};
    width: ${({ $width }) => getCSSVarValue($width) || "auto"};
    font-size: ${({ $fontSize }) => getCSSVarValue($fontSize) || "16px"};
    padding: ${({ $padding }) => getCSSVarValue($padding) || "8px"};
    gap: ${({ $gap }) => getCSSVarValue($gap) || "8px"};
  }

  /* desktop */
  @media (1400px <= width) {
    height: ${({ $height }) => getCSSVarValue($height) || "auto"};
    width: ${({ $width }) => getCSSVarValue($width) || "auto"};
    font-size: ${({ $fontSize }) => getCSSVarValue($fontSize) || "18px"};
    padding: ${({ $padding }) => getCSSVarValue($padding) || "8px"};
    gap: ${({ $gap }) => getCSSVarValue($gap) || "10px"};
  }
`;

export default StyledButton;

/* notas: crear funcion para cambiar dinamicamente los valores 
de las propiedades del Button en los media query*/
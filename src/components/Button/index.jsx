import PropTypes from "prop-types";
import StyledButton from "./Button.styles";

const Button = ({
  fontFamily,
  height,
  width,
  display,
  flexFlow,
  alignItems,
  justifyContent,
  gap,
  padding,
  background,
  shadow,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  fontColor,
  fontWeight,
  fontSize,
  textAlign,
  hoverBackground,
  hoverShadow,
  hoverBorderWidth,
  hoverBorderStyle,
  hoverBorderColor,
  hoverFontColor,
  hoverFontWeight,
  children,
  ariaLabel,
  tabIndex,
}) => {
  return (
    <StyledButton
      $fontFamily={fontFamily}
      $height={height}
      $width={width}
      $display={display}
      $flexFlow={flexFlow}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $gap={gap}
      $padding={padding}
      $background={background}
      $shadow={shadow}
      $borderWidth={borderWidth}
      $borderStyle={borderStyle}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $fontColor={fontColor}
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      $textAlign={textAlign}
      $hoverBackground={hoverBackground}
      $hoverShadow={hoverShadow}
      $hoverBorderWidth={hoverBorderWidth}
      $hoverBorderStyle={hoverBorderStyle}
      $hoverBorderColor={hoverBorderColor}
      $hoverFontColor={hoverFontColor}
      $hoverFontWeight={hoverFontWeight}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  fontFamily: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  display: PropTypes.string,
  flexFlow: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  gap: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  shadow: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string,
  hoverBackground: PropTypes.string,
  hoverShadow: PropTypes.string,
  hoverBorderWidth: PropTypes.string,
  hoverBorderStyle: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverFontColor: PropTypes.string,
  hoverFontWeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
};

/* 
  TEMPLATE:

  <Button
      fontFamily={fontFamily}
      height={height}
      width={width}
      padding={padding}
      background={background}
      shadow={shadow}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderRadius={borderRadius}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      hoverBackground={hoverBackground}
      $hoverShadow={hoverShadow}
      hoverBorderfontolor={hoverBorderColor}
      hoverFontColor={hoverFontColor}
      hoverFontWeight={hoverFontWeight}
    >
      {children}
    </Button>
    
*/

import PropTypes from "prop-types";
import Button from "../Button";
import Arrow_left_circle_Icon from "../../assets/icons/arrow_left_circle";
import StyledLeftScrollButtonSpan from "./LeftScrollButton.styles";

const LeftScrollButton = ({ handleScroll, index }) => {
  return (
    <Button>
      <StyledLeftScrollButtonSpan
        className="nav-button"
        onClick={() => handleScroll("left", index)}
        aria-label="Mover a la izquierda"
      >
        <Arrow_left_circle_Icon />
      </StyledLeftScrollButtonSpan>
    </Button>
  );
};

LeftScrollButton.propTypes = {
  handleScroll: PropTypes.func,
  index: PropTypes.number,
};

export default LeftScrollButton;

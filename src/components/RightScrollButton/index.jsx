import PropTypes from "prop-types";
import Button from "../Button";
import Arrow_right_circle_Icon from "../../assets/icons/arrow_right_circle";
import StyledRightScrollButtonSpan from "./RightScrollButton.styles";

const RightScrollButton = ({ handleScroll, index }) => {
  return (
    <Button>
      <StyledRightScrollButtonSpan
        className="nav-button"
        onClick={() => handleScroll("right", index)}
        aria-label="Mover a la derecha"
      >
        <Arrow_right_circle_Icon />
      </StyledRightScrollButtonSpan>
    </Button>
  );
};

RightScrollButton.propTypes = {
  handleScroll: PropTypes.func,
  index: PropTypes.number,
};

export default RightScrollButton;

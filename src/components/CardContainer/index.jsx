import PropTypes from "prop-types";
import StyledCardContainerSection from "./CardContainer.styles";

const CardContainer = ({ classN, title, children }) => {
  return (
    <StyledCardContainerSection className={classN}>
      <h2>{title}</h2>
      <div>{children}</div>
    </StyledCardContainerSection>
  );
};

CardContainer.propTypes = {
  classN: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CardContainer;

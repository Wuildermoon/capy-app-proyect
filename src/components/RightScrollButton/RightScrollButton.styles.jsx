import styled from "styled-components";

const StyledRightScrollButtonSpan = styled.span`
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50px;

  & > svg {
    & > path {
      stroke: var(--quaternary);
      fill: transparent;
    }
  }
`;

export default StyledRightScrollButtonSpan;

import styled from "styled-components";

const StyledH1 = styled.h1`
  /* mobile */
  font-family: var(--font-bold);
  color: var(--primary);
  font-size: 24px;
  text-align: center;

    /* mobile large */
  @media (480px <= width) {
    font-size: 26px;
  }

    /* tablet */
  @media (768px <= width) {
    font-size: 28px;
  }

    /* laptop */
  @media (960px <= width) {
    font-size: 36px;
  }

    /* desktop */
  @media (1400px < width) {
    font-size: 40px;
  }
`;

export default StyledH1;

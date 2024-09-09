import styled from "styled-components";

const StyledCardContainerSection = styled.section`
  display: flex;
  flex-flow: column nowrap;

  & > h2 {
    font-size: 18px;
    margin: 0px 10px;
  }

  & > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    & > h2 {
      font-size: 20px;
    }
  }

  /* laptop */
  @media (960px <= width) {
    & > h2 {
      font-size: 24px;
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledCardContainerSection;

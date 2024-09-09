import styled from "styled-components";

const StyledDefaultpageDiv = styled.div`
  /* tablet */
  @media (768px <= width) {
    .nav-mobile {
      display: none;
    }
  }
`;

const StyledMain = styled.main`
  /* mobile */
  display: flex;
  flex-flow: column nowrap;
  margin: 90px 10px 80px;
  gap: 10px;

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    margin: 25px 15px 25px 115px;
  }

  /* laptop */
  @media (960px <= width) {
    margin: 100px 40px 0px;
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export { StyledMain, StyledDefaultpageDiv };

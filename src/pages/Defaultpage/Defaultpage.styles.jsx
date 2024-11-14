import styled from "styled-components";

const StyledDefaultpageDiv = styled.div`
  & > main {
    /* mobile */
    display: flex;
    flex-flow: column nowrap;
    margin: 90px 10px 10px;
    gap: 10px;
  }
  /* tablet */
  @media (768px <= width) {
    .nav-mobile {
      display: none;
    }

    & > main {
      margin: 25px 15px 25px 115px;
    }
  }

  /* laptop */
  @media (960px <= width) {
    & > main {
      margin: 100px 40px 0px;
    }
  }
`;

export { StyledDefaultpageDiv };

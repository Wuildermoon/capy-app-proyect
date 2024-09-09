import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;

  .list {
    display: none;
  }

  .mobile-list {
    display: none;
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    .mobile-list {
      display: block;
    }
  }

  /* laptop */
  @media (960px <= width) {
    .list {
      display: flex;
      gap: 6px;
    }

    .mobile-list {
      display: none;
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledDiv;

import styled from "styled-components";

const StyledDiv = styled.div`
  /* mobile */
  width: auto;
  display: flex;
  gap: 10px;

  .list {
    width: auto;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px;

    & > .item {
      & > button {
        & > svg > path {
          fill: var(--icon-primary);
        }
      }
    }
  }

  .session {
    display: none;
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    .list {
      flex-flow: column wrap;
      gap: 0px;
    }
  }

  /* laptop */
  @media (960px <= width) {
    .list {
      flex-flow: row nowrap;
      gap: 10px;
    }

    .burger {
      display: none;
      background-color: red;
    }

    .session {
      display: flex;
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledDiv;

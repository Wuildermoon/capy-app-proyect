import styled from "styled-components";

const StyledDiv = styled.div`
  /* mobile */
  width: auto;
  display: flex;
  gap: 10px;

  .language-menu {
    position: absolute;
    background-color: var(--background-secondary);
    border: 1px solid var(--secondary);
    border-radius: 8px;
    list-style: none;
    padding: 5px;
    margin-top: 10px;
  }

  .language-menu li {
    padding: 8px;
    color: var(--font-primary);
    cursor: pointer;
  }

  .language-menu li:hover {
    background-color: var(--background-secondary);
  }

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

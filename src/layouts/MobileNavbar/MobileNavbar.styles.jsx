import styled from "styled-components";

const StyledNav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  position: fixed;
  bottom: 0;
  z-index: 1;

  .mobile-nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-secondary);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 0px 5px 2px var(--primary-shadow-color);

    .list-mobile {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .item-mobile > a > button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0px;
        font-size: 12px;
        gap: 0px;

        .stroke-icon > svg > path,
        .stroke-icon > svg > g > path {
          stroke: var(--quaternary);
          fill: transparent;
        }

        .fill-icon > svg > path {
          fill: var(--quaternary);
          stroke: transparent;
        }
      }

      .item-mobile > a > button:hover,
      .item-mobile > a > button:focus {
        color: var(--primary);

        & > span > svg {
          background-color: var(--secondary);
          box-shadow: var(--primary-shadow-color);
          transition: 200ms ease-in-out;
        }

        .stroke-icon > svg > path,
        .stroke-icon > svg > g > path {
          stroke: var(--primary);
          fill: transparent;
        }

        .fill-icon > svg > path {
          fill: var(--primary);
          stroke: transparent;
        }
      }

      & a > button > span > svg {
        height: 40px;
        width: 40px;
        padding: 10px;
        border-radius: 16px;
      }
    }
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    position: static;
    bottom: auto;
    z-index: unset;

    .mobile-nav {
      box-shadow: none;
    }

    .list-mobile {
      flex-flow: column;
    }
  }

  /* laptop */
  @media (960px <= width) {
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledNav;

import styled from "styled-components";

const StyledHeader = styled.header`
  /* mobile */
  width: 100%;
  padding: 0px 10px;
  position: fixed;
  top: 0;
  z-index: 1;

  .container {
    height: 80px;
    padding: 16px 20px;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0px 20px 20px;
    box-shadow: 0px 0px 5px 2px var(--primary-shadow-color);
    overflow-y: unset;
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    height: 100vh;
    width: 100px;
    padding: 25px 0px;
    top: 0;
    bottom: 0;
    left: 0;

    .container {
      height: 100%;
      flex-flow: column nowrap;
      padding: 20px 10px;
      border-radius: 0px 24px 24px 0px;
      box-shadow: 0px 0px 5px 2px var(--primary-shadow-color);
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    .container::-webkit-scrollbar {
      display: none;
    }
  }

  /* laptop */
  @media (960px <= width) {
    height: auto;
    width: 100%;
    padding: 0px 40px;
    position: fixed;
    top: 0;
    right: auto;
    bottom: auto;
    left: auto;

    .container {
      height: 80px;
      width: 100%;
      flex-flow: row nowrap;
      padding: 16px 24px;
      border-radius: 0px 0px 24px 24px;
      box-shadow: 0px 2px 5px 1px var(--primary-shadow-color);
      overflow-y: unset;
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledHeader;

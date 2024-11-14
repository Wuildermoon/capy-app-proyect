import styled from "styled-components";

const StyledCategoriesBarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
  gap: 5px;

  & > button {
    padding: 0px;
  }

  .list {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 8px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 0px 10px;
    border-radius: 30px 20px;
  }

  .list::-webkit-scrollbar {
    display: none;
  }

  .item > a > button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    font-family: var(--font-medium);
    font-size: 12px;
    color: var(--tertiary);
  }

  .item > a > button > span {
    display: block;
    height: 60px;
    width: 60px;
    padding: 10px;
    border-radius: 50px;
  }

  .fill-icon > svg > path {
    fill: var(--tertiary);
    stroke: transparent;
  }

  .item > a > button:hover,
  .item > a > button:focus {
    color: var(--primary);

    & > span {
      background-color: var(--secondary);
      box-shadow: 2px 2px 4px 0px var(--shadow-color);
      transition: 200ms ease-in-out;
    }

    .fill-icon > svg > path {
      fill: var(--primary);
      stroke: transparent;
    }
  }

  .special-button > a > button {
    color: var(--quaternary);

    .fill-icon > svg > path {
      fill: var(--quaternary);
      stroke: transparent;
    }
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
  }

  /* laptop */
  @media (960px <= width) {
    justify-content: center;

    .list {
      width: fit-content;
      justify-content: flex-start;
    }

    .item > a > button > span {
      height: 80px;
      width: 80px;
      padding: 15px;
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledCategoriesBarSection;

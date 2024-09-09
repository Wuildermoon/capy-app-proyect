import styled from "styled-components";
import { getCSSVarValue } from "../../utils/utils";

const StyledCardDiv = styled.div`
  /* mobile */
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  background-color: var(--senary);
  box-shadow: 0px 1px 5px 0px var(--primary-shadow-color);
  border-radius: 12px;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: var(--secondary);
    box-shadow: 0px 0px 5px 0px var(--primary-shadow-color) inset;
  }

  .description {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding: 0px 10px 10px;
    gap: 2px;

    .title {
      font-family: var(--font-semibold);
      font-size: 14px;
      color: var(--tertiary);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .date {
      font-family: var(--font-medium);
      font-size: 12px;
      color: var(--tertiary);
    }

    .place {
      font-family: var(--font-medium);
      font-size: 12px;
      color: var(--quaternary);
    }

    .organizer {
      font-family: var(--font-regular);
      font-size: 10px;
      color: var(--tertiary);
      text-align: right;
    }

    .description-text {
      font-family: var(--font-regular);
      font-size: 10px;
      color: var(--tertiary);
    }

    .price {
      font-family: var(--font-medium);
      font-size: 12px;
      color: var(--primary);
      text-align: right;
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
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

const StyledCardFigure = styled.figure`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0px auto;
  background-image: ${({ $background }) =>
    $background ? `url(${getCSSVarValue($background)})` : "transparent"};
  background-position: center;
  background-size: cover;

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
  }

  /* laptop */
  @media (960px <= width) {
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export { StyledCardDiv, StyledCardFigure };
